import math
                    
def f(x):
    return math.sqrt(1 - x*x)

n = int(input("Podaj ilość trapezów: "))
a = -1
b = 1

dx = (b - a) / n
s = 0
x = a
f1 = f(x)
for i in range(n):
    x += dx
    f2 = f(x)
    s += dx * (f1 + f2) / 2
    f1 = f2

pi = s * 2.0
print(pi)