w = '( (8-2)/3 + (1+4)*2 ) / 6'.replace(' ', '')
onp = ''
stack = []

for i in range(0, len(w)):    
    if w[i] == '(':
        stack.append(w[i])
        continue

    if w[i] == ')':
        while stack != [] and stack[-1] != '(':
            onp += stack.pop()
        stack.pop()  
        continue

    if w[i] == '+' or w[i] == '-':
        while stack != [] and stack[-1] != '(':
            onp += stack.pop()
        stack.append(w[i])
        continue

    if w[i] == '*' or w[i] == '/':
        if stack != [] and (stack[-1] == '*' or stack[-1] == '/'):
            onp += stack.pop()
        stack.append(w[i])
    
    else:
        onp += w[i]


while stack != []:
    onp += stack[-1]
    stack.pop()


print(onp)
