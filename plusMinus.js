const plusMinus = (arr) => {
    console.log((arr.filter(element => element > 0).length / arr.length).toPrecision(6))
    console.log((arr.filter(element => element < 0).length / arr.length).toPrecision(6))
    console.log((arr.filter(element => element === 0).length / arr.length).toPrecision(6))
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]))