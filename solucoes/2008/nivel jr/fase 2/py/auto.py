N = int(input())
est = str(input())
paineis = 0
for i in range(N):
    if(est[i] == 'P'):
        paineis += 2
    elif est[i] == 'C':
        paineis += 2
    elif est[i] == 'A':
        paineis += 1
print(paineis)
