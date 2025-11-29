import random

n = int(input("Podaj wielkość zbioru: "))

A = []
for i in range(n):
    A.append(random.randint(-10, 10))
print(A)

for i in range(0, n - 1):
    m = i
    for j in range(i + 1, n):
        if A[j] < A[m]:
            m = j
    A[i], A[m] = A[m], A[i]

print(A)