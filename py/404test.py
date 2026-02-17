#!/usr/bin/env python3
import http.server
import socketserver
import os
from pathlib import Path

PORT = 8015

# Get the project root (parent of py/ directory)
SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent

class CustomHandler(http.server.SimpleHTTPRequestHandler):
  def end_headers(self):
    self.send_header('Cache-Control', 'no-store, must-revalidate')
    self.send_header('Expires', '0')
    super().end_headers()

  def send_error(self, code, message=None):
    if code == 404:
      try:
        error_page = PROJECT_ROOT / '404.html'
        with open(error_page, 'rb') as f:
          content = f.read()
        
        self.send_response(404)
        self.send_header('Content-type', 'text/html; charset=utf-8')
        self.send_header('Content-Length', str(len(content)))
        self.end_headers()
        self.wfile.write(content)
      except FileNotFoundError:
        super().send_error(code, message)
    else:
      super().send_error(code, message)

# Change to project root so relative paths work for assets/css/js
os.chdir(PROJECT_ROOT)

with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
  print(f"✓ Server running at http://localhost:{PORT}")
  print(f"✓ Serving from: {PROJECT_ROOT}")
  print(f"  Press Ctrl+C to stop")
  try:
    httpd.serve_forever()
  except KeyboardInterrupt:
    print("\n✓ Server stopped")