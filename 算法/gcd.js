
function gcd(a,b) {
    if(a>b) {
        a = a+b;
        b = a-b;
        a = a-b;
    }
    do{
        a = a % b;
        a = a+b;
        b = a-b;
        a = a-b;
    }while(b);
    return a;
}