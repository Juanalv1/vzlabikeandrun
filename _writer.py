
import json, os

base = 'C:/Users/57305/Desktop/tiendas/vzlabikeandrun'

def wf(rel, content):
    p = os.path.join(base, rel)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, 'w', encoding='utf-8', newline='
') as f:
        f.write(content)
    print('Created: ' + p)

# Read each file content from a JSON file
with open(os.path.join(base, '_files.json'), 'r', encoding='utf-8') as f:
    files = json.load(f)

for rel, content in files.items():
    wf(rel, content)

print('All files created!')
