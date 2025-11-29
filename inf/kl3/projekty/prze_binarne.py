import random

n = int(input("Podaj wielkość zbioru: "))
x = int(input("Podaj szukaną: "))

A = []
for i in range(n):
    A.append(random.randint(-10, 10))
A.sort()
print(A)

lewy = 0
prawy = n - 1
while lewy < prawy:
    srodek = (lewy + prawy) // 2
    if A[srodek] < x:
        lewy = srodek + 1
    else:
        prawy = srodek

if A[lewy] == x:
    print(f"Znaleziono {x} o indeksie {lewy}")
else:
    print(f"Nie znaleziono {x}")