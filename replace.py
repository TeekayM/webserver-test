import os

t = open("./projects/example.txt", "r")
text = t.read()
t.close()
print(text)

for file in os.listdir("./projects"):
    if file.endswith(".html"):
        print("Reformatting " + str(file))
        f = open(os.path.join("./projects", file), "w")
        f.write(text)
        f.close()