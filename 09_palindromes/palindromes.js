const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const stringCleared = string
        .toLowerCase()
        .split ('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    const reversedString = stringCleared.split('').reverse().join('');
    return stringCleared == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
