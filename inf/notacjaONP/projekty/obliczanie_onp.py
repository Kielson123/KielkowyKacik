onp = '42-13+*'
stos = []

for i in range(0, len(onp)):
    if onp[i].isdigit():
        stos.append(int(onp[i]))
    
    else:
        arg2 = stos[-1]
        stos.pop()
        arg1 = stos[-1]
        stos.pop()

        znak = onp[i]
        if znak == '+': 
            stos.append(arg1 + arg2)
        elif znak == '-': 
            stos.append(arg1 - arg2)
        elif znak == '*': 
            stos.append(arg1 * arg2)
        elif znak == '/': 
            stos.append(arg1 // arg2)

wart = stos[-1]
stos.pop()
print(wart)