import random

def szybkie(A, p ,k):
    i = p
    j = k
    m = A[(p + k) // 2]
    while i <= j:
        while A[i] < m: i += 1
        while A[j] > m: j -= 1
        if i <= j:
            A[i], A[j] = A[j], A[i]
            i += 1
            j -= 1
    if p < j: szybkie(A, p, j)
    if i < k: szybkie(A, i, k)


n = int(input("Podaj ilość liczb w tablicy: "))

A = []
for i in range(n):
    A.append(random.randint(-10, 10))
print(A)

szybkie(A, 0, n-1)
print(A)