Q = int(input())
G = input()
R = input()
a = 0

for i in range(len(G)):
        if G[i] == R[i]:
            a += 1

print(a)

