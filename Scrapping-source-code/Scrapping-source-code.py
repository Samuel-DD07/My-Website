import requests

def ScrappingSourceCode(url):
    r = requests.get(url)
    codeSource = r.text
    fichier = open("codeSource.html", "w")
    fichier.write(codeSource)
    fichier.close()

ScrappingSourceCode('https://fr.wikipedia.org/wiki/')