P = int(input())
D_1 = int(input())
D_2 = int(input())

if (D_1 + D_2) % 2 == 0 and P == 1:
    print(1)
elif (D_1 + D_2) % 2 == 0 and P == 0:
    print(0)
elif (D_1 + D_2) % 2 != 0 and P == 0:
    print(1)
else:
    print(0)
