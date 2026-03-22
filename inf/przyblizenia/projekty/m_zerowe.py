def f(x):
    return (1/4)*(x*x) - 2

a = 2
b = 4
eps = float(input("Podaj dokładność: ")) # np. 0.001

x0 = (a + b) / 2
while f(x0) != 0 and b - a > eps:
    if f(a) * f(x0) < 0:
        b = x0
    else:
        a = x0
    x0 = (a + b) / 2

print(x0)