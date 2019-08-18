#!/usr/bin/python3
import requests
import urllib.parse
import re

def minify(js):
    url = 'https://javascript-minifier.com/raw'
    data = {'input': js}
    response = requests.post(url, data=data)
    return response.text

def bookmarklet(code, name="Bookmarklet"):
    minified = minify(code)
    escaped = urllib.parse.quote(minified)
    return "<a href='javascript:%s'>%s</a>"%(escaped, name)

with open("get_path_bookmarklet.js", "r") as f:
    contents = f.read()
    print(bookmarklet(contents, "[Copy post path]"))

with open("stackedit_bookmarklet.js", "r") as f:
    contents = f.read()
    parts = re.compile("// #+[^#]+#+\n").split(contents)
    save = parts[1] + parts[2]
    open = parts[1] + parts[3]
    print(bookmarklet(save, "[Save post]"))
    print(bookmarklet(open, "[Open post]"))
