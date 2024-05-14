var A
var B
var C

scanf("%d", "A")
scanf("%d", "B")
scanf("%d", "C")

if (A + B < C || C > B && B > A) {
    printf("%d", 1)
}
else if (A < B && A < C || B < C) {
    printf("%d", 2)
}
else {
    printf("%d", 3)
}
