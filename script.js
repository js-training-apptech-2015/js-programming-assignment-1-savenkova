function solution1(A, B, C) {
    if (A < B && C > 0) {
        return Math.ceil((B - A) / C);
    }
    return false;
};

