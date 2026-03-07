import re

file_path = r"e:\MsAsiaNew\MSasiaWEB\src\components\Pages\EWaste\EWasteContent.jsx"

with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

# Specifically target mt-, mb-, my-, space-y- classes
pattern = r"\b(?:mt|mb|my|space-y)-[a-zA-Z0-9\[\]\-]+\b"

# Strip them out
new_text = re.sub(pattern, "", text)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_text)

print("Done stripping vertical margins.")
