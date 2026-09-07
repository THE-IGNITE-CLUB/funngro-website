"""
fix_all.py — Patches all 4 Stitch HTML files:
1. Replaces rocket_launch + "Funngro" text logo with real LOGO.JPG
2. Fixes body background so iframe never shows blank
"""
import os, re

BASE = os.path.dirname(os.path.abspath(__file__))
LOGO_IMG = '<img src="/LOGO.JPG" alt="Funngro" style="height:36px;width:auto;object-fit:contain;display:block;">'

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

    original = html

    # Pattern 1: <a ...>rocket_launch icon + Funngro text</a>  (mobile)
    html = re.sub(
        r'(<a[^>]*class="[^"]*font-headline-md[^"]*"[^>]*>)\s*<span[^>]*>rocket_launch</span>\s*Funngro\s*(</a>)',
        r'<a href="/" style="display:flex;align-items:center;">' + LOGO_IMG + r'</a>',
        html, flags=re.DOTALL, count=2
    )

    # Pattern 2: <div ...>rocket_launch icon + Funngro text</div>  (desktop)
    html = re.sub(
        r'(<div[^>]*class="[^"]*font-headline-md[^"]*"[^>]*>)\s*<span[^>]*>rocket_launch</span>\s*Funngro\s*(</div>)',
        '<div style="display:flex;align-items:center;">' + LOGO_IMG + '</div>',
        html, flags=re.DOTALL, count=2
    )

    # Pattern 3: standalone span+text in discover (simpler wrapper)
    html = re.sub(
        r'<span[^>]*class="[^"]*material-symbols[^"]*"[^>]*>rocket_launch</span>\s*Funngro',
        LOGO_IMG,
        html, flags=re.DOTALL
    )

    # Fix: ensure body always has dark background (prevents white blank flash)
    html = re.sub(
        r'(<body[^>]*class="[^"]*bg-background[^"]*")',
        r'\1 style="background:#101412;min-height:100vh;"',
        html, count=1
    )
    # Fallback for body without bg-background class
    if 'style="background:#101412' not in html:
        html = html.replace('<body>', '<body style="background:#101412;min-height:100vh;">', 1)

    if html != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(html)
        print('PATCHED:', rel)
    else:
        print('SKIPPED (no match):', rel)

print('Done.')
