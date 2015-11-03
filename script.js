function solution1(A, B, C) {

    if (A < B && C > 0) {
        return ('The minimal number of days: ' + Math.ceil((B - A) / C));
    }

    return false;
};

function solution2(A, B) {
    var maxXOR = 0,
        curXOR, C;

    while (A < B) {
        C = A + 1;
        while (C <= B) {
            curXOR =  A^C;
            if (curXOR > maxXOR) {
                maxXOR = curXOR;
            }
            C++;
        }
        A++;
    }

    return ('The maximal *XOR* value for two numbers from [A, B]: ' + maxXOR);
};