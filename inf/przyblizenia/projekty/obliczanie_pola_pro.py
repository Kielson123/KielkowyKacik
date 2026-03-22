import math

def f(x):
    return math.sin(x)

n = int(input("Podaj ilość prostokątów: "))
a = 1 # lewy kraniec
b = 3 # prawy kraniec

dx = (b - a) / n
s = 0
x = a
for i in range(n):
    x += dx
    s += dx * f(x)

print(s)