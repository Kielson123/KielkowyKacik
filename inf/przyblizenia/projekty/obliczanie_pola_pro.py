import math

def f(x):
    return math.sin(x)

n = int(input("Podaj ilość prostokątów: "))
a = 1 # lewa granica
b = 3 # prawa granica

dx = (b - a) / n # szerokość prostokąta
s = 0
x = a # lewy dolny róg prostokąta
for i in range(n):
    x += dx
    s += dx * f(x)

print(s)