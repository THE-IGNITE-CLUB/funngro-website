"""
fix_html_files.py
─────────────────
1. Replace the rocket + "Funngro" text logo in nav with real LOGO.JPG
2. Fix iframe blank issue by making Tailwind load before body renders
3. Apply to all 4 HTML files
"""
import os, re

BASE = os.path.dirname(os.path.abspath(__file__))

FILES = [
    'public/desktop-home.html',
    'public/mobile-home.html',
    'public/desktop-discover.html',
    'public/mobile-discover.html',
]

# Replace the nav logo div (rocket icon + "Funngro" text) with real img
OLD_LOGO = '''<div class="font-headline-md text-headline-md font-extrabold text-primary flex items-center gap-2">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">rocket_launch</span>
                Funngro
            </div>'''

NEW_LOGO = '''<div class="flex items-center">
  <img src="/LOGO.JPG" alt="Funngro" style="height:38px;width:auto;object-fit:contain;display:block;" />
</div>'''

# Also handle mobile/discover variants (slightly different whitespace)
OLD_LOGO_ALT = 'rocket_launch'  # fallback: find any nav with rocket_launch icon

for rel in FILES:
    path = os.path.join(BASE, rel)
    if not os.path.exists(path):
        print('SKIP:', rel)
        continue

    with open(path, 'r', encoding='utf-8', errors='replace') as f:
        html = f.read()

    original = html

    # ── 1. Replace logo block precisely ──
    # Strip surrounding whitespace variations and match the pattern
    # Use regex to match the logo div generically
    html = re.sub(
        r'<div[^>]*class="[^"]*font-headline-md[^"]*"[^>]*>.*?rocket_launch.*?Funngro.*?</div>',
        '<div class="flex items-center"><img src="/LOGO.JPG" alt="Funngro" style="height:38px;width:auto;object-fit:contain;display:block;" /></div>',
        html,
        flags=re.DOTALL | re.IGNORECASE,
        count=1
    )

    # ── 2. Fallback: if regex missed it, inject logo via JS (already done via injectLogo script) ──

    # ── 3. Fix iframe blank: ensure body has min-height and bg ──
    html = html.replace(
        '<body>',
        '<body style="min-height:100vh;background:#101412;">',
        1
    )

    if html != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(html)
        print('DONE:', rel)
    else:
        print('NO CHANGE (already patched or pattern mismatch):', rel)
