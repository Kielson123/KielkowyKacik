import random

n = int(input("Podaj wielkość zbioru: "))

A = []
for i in range(n):
    A.append(random.randint(0, 10))
print(A)

xmin = A[0]
xmax = A[0]
for i in range(1, n):
    if A[i] < xmin:
        xmin = A[i]
    if A[i] > xmax:
        xmax = A[i]

k = xmax - xmin + 1
kubelki = [0] * k

for i in range(n):
    kubelki[A[i] - xmin] += 1

indeks_tab = 0
indeks_kubelka = 0

while indeks_tab < n:
    if kubelki[indeks_kubelka] != 0:
        A[indeks_tab] = xmin + indeks_kubelka
        kubelki[indeks_kubelka] -= 1
        indeks_tab += 1
    else:
        indeks_kubelka += 1

print(A)