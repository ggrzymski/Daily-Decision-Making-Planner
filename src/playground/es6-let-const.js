const multiplier =
{
    numbers: [1,2,3],
    multiplyBy: 3,
    multiply: function() {
        return this.numbers.map((x) => x * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
