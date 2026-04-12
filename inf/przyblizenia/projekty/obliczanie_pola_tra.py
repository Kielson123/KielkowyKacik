import math

def f(x):
    return math.sin(x)

n = int(input("Podaj ilość trapezów: "))
a = 1 # lewa granica
b = 3 # prawa granica

dx = (b - a) / n # wysokość trapezu
s = 0
x = a # lewy dolny róg trapezu
f1 = f(x) # pierwszy bok
for i in range(n):
    x += dx
    f2 = f(x) # drugi bok
    s += dx * (f1 + f2) / 2
    f1 = f2

print(s)