A = int(input())
M = list(map(int, input().split()))
M.sort(reverse=True)
print("S") if M[0] == M[1] else print("N")

