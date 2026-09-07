"""
fix_paths_for_ghpages.py
Changes absolute paths (/LOGO.JPG, /stitch_funngro...) to relative
paths (./LOGO.JPG, ./stitch_funngro...) in all 4 Stitch HTML files
so they work correctly on GitHub Pages (/funngro-website/ subdirectory).
"""
import os, re

BASE = os.path.dirname(os.path.abspath(__file__))
FILES = [
    'public/desktop-home.html',
    'public/mobile-home.html',
    'public/desktop-discover.html',
    'public/mobile-discover.html',
]

for rel in FILES:
    path = os.path.join(BASE, rel)
    with open(path, 'r', encoding='utf-8', errors='replace') as f:
        html = f.read()

    # /LOGO.JPG → ./LOGO.JPG
    html = html.replace('src="/LOGO.JPG"', 'src="./LOGO.JPG"')

    # /stitch_funngro_revamp_website/ → ./stitch_funngro_revamp_website/
    html = html.replace(
        "'/stitch_funngro_revamp_website/",
        "'./stitch_funngro_revamp_website/"
    )
    html = html.replace(
        '"/stitch_funngro_revamp_website/',
        '"./stitch_funngro_revamp_website/'
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)
    print('DONE:', rel)

print('All paths fixed for GitHub Pages.')
