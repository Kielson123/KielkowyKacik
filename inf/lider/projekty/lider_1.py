import random

def szukaj_lidera(A):
    n = len(A)
    for i in range(n):
        ile = 0
        for j in range(n):
            if A[j] == A[i]:
                ile += 1
        if ile > n // 2:
            return A[i]
    return -1


A = []
for i in range(5):
    A.append(random.randint(1, 3))
print(A)

lider = szukaj_lidera(A)
if lider != -1:
    print("Lider:", lider)
else:
    print("Nie istnieje lider w danym zbiorze")