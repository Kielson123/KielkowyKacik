import random

n = int(input("Ilość punktów: "))

n0 = 0
for i in range(n):
    x = random.uniform(-1, 1)
    y = random.uniform(-1, 1)
    if x*x + y*y <= 1:
        n0 = n0 + 1
pi = 4 * n0 / n

print(pi)