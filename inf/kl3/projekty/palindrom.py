def czy_palindrom(tekst):
    tekst = tekst.replace(" ", "").lower()
    dlugosc = len(tekst)
    for i in range(0, dlugosc // 2):
        if tekst[i] != tekst[dlugosc - i - 1]:
            return False
    return True

tekst = input("Podaj tekst: ")
if czy_palindrom(tekst):
    print(f"'{tekst}' jest palindromem.")
else:
    print(f"'{tekst}' nie jest palindromem.")