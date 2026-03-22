import math

def f(x):
    return math.sqrt(1 - x*x)

n = int(input("Podaj ilość prostokątów: "))
a = -1
b = 1

dx = (b - a) / n
s = 0
x = a
for i in range(n):
    x += dx
    s += dx * f(x)

pi = s * 2.0
print(pi)