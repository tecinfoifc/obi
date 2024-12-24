A = int(input())
J = list(map(float, input().split()))
lucro = float('-inf')

for i in range(A - 3):
    max_lucro = sum(J[i:i+4])
    if(max_lucro > lucro):
        lucro = max_lucro

print(int(lucro))