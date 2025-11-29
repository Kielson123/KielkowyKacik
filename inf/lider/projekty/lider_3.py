import random

def szukaj_lidera(A):
    n = len(A)
    ile = 0
    for i in range(n):
        if ile == 0:
            kandydat = A[i]
            ile += 1
        else:
            if A[i] == kandydat:
                ile += 1
            else:
                ile -= 1
    
    if ile == 0:
        return -1
    
    ile = 0
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