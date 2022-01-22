import os
import json

t = open("./projects/example.txt", "r")
text = t.read()
t.close()
jsonfile = json.load(open("./projects/projects.json", "r"))
projects = jsonfile.keys()
print(projects)
print(text)

for project in projects:
    print("Making " + project + ".html")
    f = open("./projects/" + project + ".html", "w")
    f.write(text)
    f.close()