N, P = map(int, input().split())
ganhadores = 0

for i in range(N):
    X, Y = map(int, input().split())
    if (X + Y) >= P:
        ganhadores += 1

print(ganhadores)
    