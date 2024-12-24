N, D, Q = list(map(int, input().split()))

if N > D and N > Q:
    print(int(D), int(Q))
elif((N > D/10) and (N > Q/10)):
    if(D/10).is_integer() and (Q/10).is_integer():
        print(int(D/10), int(Q/10))
    else:
        print('IMPOSSIVEL')