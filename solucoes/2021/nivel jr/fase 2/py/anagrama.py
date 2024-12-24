N = int(input())
A = input().strip()
B = input().strip()

frase_a = ''.join(filter(str.isalpha, A)).lower()
frase_b = ''.join(filter(str.isalpha, B)).lower()

frase_ordA = ''.join(sorted(frase_a))
frase_ordB = ''.join(sorted(frase_b))

if frase_ordA == frase_ordB:
    print("S")
else: 
    print("N")