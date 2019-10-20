function max(arg1, arg2) {
    var log = arg1 > arg2;
    console.log(log);
    if (log) {
        return arg1;
    } else {
        return arg2;
    }
}