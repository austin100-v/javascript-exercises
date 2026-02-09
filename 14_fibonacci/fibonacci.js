const fibonacci = function(member) {
    const startingSequence = [0, 1];
    // let firstPrev = 1;
    // let secondPrev = 0;
    // let current = 0;
    if (member < 0) {
        return "OOPS";
    } else if (member === 0) {
        return 0;
    } else if (member === 1) {
        return 1;
    } else {
        for (let i = 2; i <= member; i++) {
            startingSequence.push(startingSequence[i - 1] + startingSequence[i - 2]);
            // current = firstPrev + secondPrev;
            // secondPrev = firstPrev;
            // firstPrev = current;
        }
        return startingSequence[member];
        // return firstPrev;
    }
};
// Do not edit below this line
module.exports = fibonacci;
