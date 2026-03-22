c = float(input("Podaj liczbę: "))
eps = float(input("Podaj dokładność obliczeń: ")) # np. 0.001

a = 1
b = c
while b - a > eps:
    pkw = (a + b) / 2
    if pkw * pkw < c:
        a = pkw
    else:
        b = pkw
pkw = (a + b) / 2

print(f"Pierwiastek z {c} to w przybliżeniu: {pkw}")