import random

n = int(input("Podaj wielkość zbioru: "))

Wej = []
for i in range(n):
    Wej.append(random.randint(0, 10))
print(Wej)

min = Wej[0]
max = Wej[0]
for i in range(1, n):
    if Wej[i] < min:
        min = Wej[i]
    if Wej[i] > max:
        max = Wej[i]

k = max - min + 1
pom = [0] * k

for i in range(n):
    pom[Wej[i] - min] += 1

for i in range(1, k):
    pom[i] += pom[i - 1]

Wyj = [0] * n
for i in range(n - 1, -1, -1):
    element = Wej[i]
    indeksWTablicyWynikowej = pom[element - min] - 1
    pom[element - min] -= 1
    Wyj[indeksWTablicyWynikowej] = element

print(Wyj)