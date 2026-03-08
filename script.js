function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    if (num === 0) return ''; // Roman numerals have no 0

    // Subtractive notation mapping
    const subtractive = {
        1000: 'CM', // 900
        500: 'CD',  // 400
        100: 'XC',  // 90
        50: 'XL',   // 40
        10: 'IX',   // 9
        5: 'IV'     // 4
    };

    let result = '';

    // Handle M (1000) separately for 1000+ cases
    while (num >= obj[0][1]) {
        result += obj[0][0];
        num -= obj[0][1];
    }

    // Handle remaining numerals with subtractive notation
    const values = [500, 100, 50, 10, 5, 1];
    for (let val of values) {
        // Check for subtractive notation
        if (subtractive[val] && num >= val - (val === 500 ? 100 : val === 100 ? 10 : val === 50 ? 10 : val === 10 ? 1 : val === 5 ? 1 : 0)) {
            const subValue = val - (val === 500 ? 100 : val === 100 ? 10 : val === 50 ? 10 : val === 10 ? 1 : val === 5 ? 1 : 0);
            if (num >= subValue) {
                result += subtractive[val];
                num -= subValue;
            }
        }
        // Add the numeral repeatedly
        const objKey = Object.keys(obj).find(k => obj[k][1] === val);
        while (num >= val) {
            result += obj[objKey][0];
            num -= val;
        }
    }

    return result;
}

// Test examples
console.log(convertToRoman(14));   // XIV
console.log(convertToRoman(798));  // DCCXCVIII
console.log(convertToRoman(36));   // XXXVI
console.log(convertToRoman(3999)); // MMMCMXCIX

// do not edit below this line
module.exports = convertToRoman;