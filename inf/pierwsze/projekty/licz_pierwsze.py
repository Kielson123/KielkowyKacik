import math

def czy_pierwsza(liczba):
    if liczba == 0 or liczba == 1:
        return False
    for i in range(2, int(math.sqrt(liczba) + 1)):
        if liczba % i == 0:
            return False
    return True

n = int(input("Podaj liczbę do sprawdzenia: "))

if czy_pierwsza(n):
    print(f"Liczba {n} jest liczbą pierwszą")
else:
    print(f"Liczba {n} nie jest liczbą pierwszą")