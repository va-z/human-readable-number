module.exports = function toReadable(number) {
    const DICT_0_20 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];
    const DICT_20_100 = [
        null,
        null,
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number <= 20) return DICT_0_20[number];
    else if (number < 100) {
        const ten = Math.floor(number / 10);
        const one = number % 10;
        return DICT_20_100[ten] + (one ? " " + DICT_0_20[one] : "");
    } else {
        const hundred = Math.floor(number / 100);
        const ten = number % 100;
        return (
            DICT_0_20[hundred] + " hundred" + (ten ? " " + toReadable(ten) : "")
        );
    }
};
