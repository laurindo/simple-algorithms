function fibonacci(num) {
    var prev = 1;
    var next = 0;
    var temp;

    while(num >=0) {
        temp = prev;
        prev = prev + next;
        next = temp;
        num--;
        console.log(next);
    }
}

fibonacci(4);