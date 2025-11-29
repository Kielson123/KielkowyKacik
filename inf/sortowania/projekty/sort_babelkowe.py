import random

n = int(input("Podaj wielkość zbioru: "))

A = []
for i in range(n):
    A.append(random.randint(-10, 10))
print(A)

for i in range(1, n):
    for j in range(0, n - i):
        if A[j] > A[j + 1]:
            A[j], A[j + 1] = A[j + 1], A[j]

print(A)