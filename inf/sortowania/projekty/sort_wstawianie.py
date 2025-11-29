import random

n = int(input("Podaj wielkość zbioru: "))

A = []
for i in range(n):
    A.append(random.randint(-10, 10))
print(A)

for i in range(2, n):
    pom = A[i]
    j = i - 1
    while j >= 0 and A[j] > pom:
        A[j+1] = A[j]
        j-=1
    A[j+1] = pom

print(A)