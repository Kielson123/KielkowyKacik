tekst = input("Podaj tekst: ")
dlugosc_tekstu = len(tekst)

klucz = int(input("Podaj klucz: "))

while klucz < 2 or klucz > (dlugosc_tekstu / 2):
    klucz_max = int(dlugosc_tekstu / 2)
    print(f"""Błąd! Klucz musi być większy lub równy 2 i 
        mniejszy lub równy {klucz_max}.""")
    klucz = int(input("Podaj klucz: "))

szyfr = ""

for i in range(klucz):
    for j in range(i, dlugosc_tekstu, klucz):
        szyfr += tekst[j]

print(szyfr)