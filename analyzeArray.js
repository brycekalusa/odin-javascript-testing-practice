function analyzeArray(array) {
    const average = array.reduce((acc, curr) => acc + curr, 0) / array.length;
    const min = array.reduce((acc, curr) => Math.min(acc, curr)) 
    const max = array.reduce((acc, curr) => Math.max(acc, curr)) 
    const length = array.length;

    const object = {
        average: average,
        min: min,
        max: max,
        length: length
    }

    return object;
}

module.exports = analyzeArray;