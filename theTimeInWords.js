const timeInWords = (h, m) => {
    const words = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
        "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two",
        "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven",
        "twenty eight", "twenty nine", "thirty", "thirty one", "thirty two",
        "thirty three", "thirty four", "thirty five", "thirty six", "thirty seven",
        "thirty eight", "thirty nine", "forty", "forty one", "forty two", "forty three",
        "forty four", "forty five", "forty six", "forty seven", "forty eight",
        "forty nine", "fifty", "fifty one", "fifty two", "fifty three", "fifty four",
        "fifty five", "fifty six", "fifty seven", "fifty eight", "fifty nine", "sixty"
    ];

    if (m === 0) {
        return `${words[h]} o'clock`;
    } else if (m === 15) {
        return `quarter past ${words[h]}`;
    } else if (m === 30) {
        return `half past ${words[h]}`;
    } else if (m === 45) {
        return `quarter to ${words[h + 1]}`;
    } else if (m < 30) {
        return `${words[m]} minute${m !== 1 ? 's' : ''} past ${words[h]}`;
    } else {
        return `${words[60 - m]} minute${m !== 59 ? 's' : ''} to ${words[h + 1]}`;
    }
}

console.log(timeInWords(5, 28));

