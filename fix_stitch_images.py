"""
fix_stitch_images.py
Injects real testimonial images into all 4 Stitch HTML files.
Each "filename.jpg" is actually a FOLDER containing screen.png.
"""
import os, re

BASE = os.path.dirname(os.path.abspath(__file__))
FOLDER = 'stitch_funngro_revamp_website'

IMAGES = {
    'ankush':    f'/{FOLDER}/image_from_https_www.funngro.com_assets_ankush_borana_etwvzpar.jpg/screen.png',
    'anshika':   f'/{FOLDER}/image_from_https_www.funngro.com_assets_anshika_paapwhhq.jpg/screen.png',
    'ashwani':   f'/{FOLDER}/image_from_https_www.funngro.com_assets_ashwani_sirn6cf8.jpg/screen.png',
    'naitik':    f'/{FOLDER}/image_from_https_www.funngro.com_assets_naitik_mishra_cg3pxfil.jpg/screen.png',
    'sarthak':   f'/{FOLDER}/image_from_https_www.funngro.com_assets_sarthak_jen2w_kg.jpg/screen.png',
    'sayandeep': f'/{FOLDER}/image_from_https_www.funngro.com_assets_sayandeep_ccdexwxb.jpg/screen.png',
    'sayyam':    f'/{FOLDER}/image_from_https_www.funngro.com_assets_sayyam_mehta_aeedvr_7.jpg/screen.png',
    'swarnim':   f'/{FOLDER}/image_from_https_www.funngro.com_assets_swarnim_prateek_dtj_8wo4.jpg/screen.png',
    'ujjwal':    f'/{FOLDER}/image_from_https_www.funngro.com_assets_ujjwal_dubey_cjknhre1.jpg/screen.png',
    'yashraj':   f'/{FOLDER}/image_from_https_www.funngro.com_assets_yashraj_singh_b3l6hm7t.jpg/screen.png',
}

JS = """
<script>
(function(){
  var IMGS = %s;
  function key(t){ t=(t||'').toLowerCase(); for(var k in IMGS){if(t.indexOf(k)!==-1)return k;} return null; }
  function ctx(el){ return [el.alt||'',el.src||'',el.parentElement?el.parentElement.textContent:'',el.parentElement&&el.parentElement.parentElement?el.parentElement.parentElement.textContent:''].join(' '); }
  function fix(){
    document.querySelectorAll('img').forEach(function(img){
      if(!img.src||img.src.indexOf('screen.png')!==-1||img.src.indexOf('LOGO')!==-1) return;
      var k=key(img.getAttribute('src')||'')||key(ctx(img));
      if(k){ img.src=IMGS[k]; img.style.objectFit='cover'; }
    });
  }
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',function(){fix();setTimeout(fix,800);}):( fix(),setTimeout(fix,800));
})();
</script>
"""

FILES = [
    'public/desktop-home.html',
    'public/mobile-home.html',
    'public/desktop-discover.html',
    'public/mobile-discover.html',
]

import json
js_with_data = JS % json.dumps(IMAGES)

for rel in FILES:
    path = os.path.join(BASE, rel)
    with open(path, 'r', encoding='utf-8', errors='replace') as f:
        html = f.read()

    # Remove old injection first
    html = re.sub(r'<script>\s*\(function\(\)\{var IMGS.*?</script>', '', html, flags=re.DOTALL)

    # Inject before </body>
    html = html.replace('</body>', js_with_data + '\n</body>', 1)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)
    print('DONE:', rel)

print('All files updated with correct screen.png paths.')
