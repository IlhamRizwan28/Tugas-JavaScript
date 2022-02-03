function comp(alphabet1, alphabet2){
    if (alphabet1.length === alphabet2.length) {
        return true;
    }

    else {
        return false;
    }
}
console.log(comp("AB", "CD"));
console.log(comp("ABC", "DE"));
console.log(comp("hello", "edabit"));