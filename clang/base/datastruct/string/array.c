#include <stdio.h>
int main(int argc, char const *argv[])
{
    char names[2][10] = { {'J','a','y','\0'}, {'J','i','m','\0'} };

    char names2[2][10] = { {"Jay"}, {"Jim"} };

    char names3[2][10] = { "Jay", "Jim" };

    printf("names:\n");
    for (int i = 0; i < 2; i++) {
        printf("%s\n", names[i]);
    }

    printf("names2:\n");
    for (int i = 0; i < 2; i++) {
        printf("%s\n", names2[i]);
    }

    printf("names3:\n");
    for (int i = 0; i < 2; i++) {
        printf("%s\n", names3[i]);
    }
    return 0;
}
