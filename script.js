function convertToRoman(num) {
    if (num === 0) return ''; // Roman numerals have no representation for 0

    // Roman numerals mapping, including subtractive notation
    const romanSymbols = [
        ['C̅', 100000],
        ['X̅C̅', 90000],
        ['L̅', 50000],
        ['X̅L̅', 40000],
        ['X̅', 10000],
        ['I̅X̅', 9000],
        ['V̅', 5000],
        ['I̅V̅', 4000],
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let result = '';

    for (let [symbol, value] of romanSymbols) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Test examples
console.log(convertToRoman(14));      // XIV
console.log(convertToRoman(798));     // DCCXCVIII
console.log(convertToRoman(3999));    // MMMCMXCIX
console.log(convertToRoman(10000));   // X̅
console.log(convertToRoman(45000));   // X̅L̅V̅
console.log(convertToRoman(99999));   // X̅C̅I̅X̅CMXCIX