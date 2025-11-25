import random

def sortuj(A):
    n = len(A)
    for i in range(1, n):
        for j in range(0, n - i):
            if A[j] > A[j + 1]:
                A[j], A[j + 1] = A[j + 1], A[j]

def szukaj_lidera(A):
    n = len(A)
    sortuj(A)

    ile = 0
    kandydat = A[n // 2]
    for i in range(n):
        if A[i] == kandydat:
            ile += 1
    
    if ile > n // 2:
        return kandydat
    else:
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