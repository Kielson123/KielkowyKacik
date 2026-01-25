import random

A = []
for i in range(7):
    A.append(random.randint(0, 9))

akt_dl = 0
maks_dl = 0
n = len(A)
for i in range(1, n):
    if A[i-1] <= A[i]:
        akt_dl += 1
        if maks_dl < akt_dl:
            maks_dl = akt_dl
    else:
        akt_dl = 1

print(A)
print(maks_dl)