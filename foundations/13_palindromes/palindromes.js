const palindromes = function(input) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let cleaned = input.toLowerCase().split('').filter((char) => alphanumerical.includes(char));
    let reversed = cleaned.slice().reverse().join('');
    return reversed === cleaned.join('');
};

// Do not edit below this line
module.exports = palindromes;
