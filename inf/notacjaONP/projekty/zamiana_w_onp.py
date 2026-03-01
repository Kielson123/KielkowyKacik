w = '((8-2)/3+(1+4)*2)/6'
onp = ''
stos = []

for i in range(0, len(w)):    
    if w[i] == '(':
        stos.append(w[i])
        continue

    if w[i] == ')':
        while stos != [] and stos[-1] != '(':
            onp += stos.pop()
        stos.pop()  
        continue

    if w[i] == '+' or w[i] == '-':
        while stos != [] and stos[-1] != '(':
            onp += stos.pop()
        stos.append(w[i])
        continue

    if w[i] == '*' or w[i] == '/':
        if stos != [] and (stos[-1] == '*' or stos[-1] == '/'):
            onp += stos.pop()
        stos.append(w[i])
    
    else:
        onp += w[i]


while stos != []:
    onp += stos[-1]
    stos.pop()


print(onp)
