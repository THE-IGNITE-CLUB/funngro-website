"""
Funngro Website — Python Flask Deployment Server
Serves the production-built React app (dist/) with proper
SPA routing support and security headers.

Usage:
  pip install flask
  python server.py
"""

import os
from flask import Flask, send_from_directory, make_response

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DIST_DIR = os.path.join(BASE_DIR, 'dist')

app = Flask(__name__, static_folder=DIST_DIR, static_url_path='')


def add_headers(response):
    """Add security + performance headers to every response."""
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'SAMEORIGIN'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    """
    SPA catch-all route:
    - Serves static assets (JS, CSS, images, Stitch HTML files) directly.
    - Falls back to index.html for React Router client-side routes.
    """
    target = os.path.join(DIST_DIR, path) if path else None

    if path and os.path.exists(target) and os.path.isfile(target):
        response = make_response(send_from_directory(DIST_DIR, path))
    else:
        response = make_response(send_from_directory(DIST_DIR, 'index.html'))

    return add_headers(response)


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    debug = os.environ.get('FLASK_DEBUG', 'false').lower() == 'true'

    print(f"""
╔══════════════════════════════════════════════╗
║       FUNNGRO WEBSITE — Flask Server         ║
║  → http://localhost:{port}                      ║
║  Serving: {DIST_DIR}     ║
╚══════════════════════════════════════════════╝
    """)

    app.run(host='0.0.0.0', port=port, debug=debug)
