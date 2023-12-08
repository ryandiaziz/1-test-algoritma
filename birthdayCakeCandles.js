const birthdayCakeCandles = (candles) => {
    let tallestCandle = 0

    candles.forEach(element => {
        if (element > tallestCandle) {
            tallestCandle = element
        }
    });

    const result = candles.filter(element => element === tallestCandle)

    return result.length
}

console.log(birthdayCakeCandles([3, 2, 1, 3]))