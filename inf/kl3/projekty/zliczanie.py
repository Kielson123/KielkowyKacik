napis = input("Podaj napis: ").upper()

liczniki = [0] * 26

for litera in napis:
    indeks = ord(litera) - ord('A')
    liczniki[indeks] += 1

kod_A = ord('A')
for i in range(len(liczniki)):
    if liczniki[i] > 0:
        print(f"{chr(kod_A + i)} - {liczniki[i]}")