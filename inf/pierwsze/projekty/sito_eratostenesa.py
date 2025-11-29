n = int(input("Podaj n: "))
A = [0] * n
d = 2
while d*d <= n:
    j = d*d
    while j< n:
        A[j] = 1
        j+=d
    d+=1

pierwsze = []
while i < n-2:
    if A[i] == 0:
        pierwsze.append(i)
    i+=1
print(pierwsze)