import random

n = int(input("Podaj wielkość zbioru: "))
x = int(input("Podaj szukaną: "))
komunikat = f"Nie znaleziono {x}"

A = []
for i in range(n):
    A.append(random.randint(-10, 10))
print(A)

for i in range(n):
    if A[i] == x:
        komunikat = f"Znaleziono {x} o indeksie {i}"
        break

print(komunikat)