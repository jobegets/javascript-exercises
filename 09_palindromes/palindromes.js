const palindromes = function (string) {
    len = string.length;
    middle = Math.floor(len / 2) ;
    pali = true;
    for (let i = 0; i < len; i++){
        if(string[i] != string[len - i - 1]){
            pali = false;
        }
    }
    return pali;
};

// Do not edit below this line
module.exports = palindromes;
