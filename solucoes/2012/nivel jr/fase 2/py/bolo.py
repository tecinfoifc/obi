import math
A, B, C = list(map(int, input().split()))
bolo = ((A / 2) + (B / 3) + (C / 5)) / 3
print(math.floor(bolo))
