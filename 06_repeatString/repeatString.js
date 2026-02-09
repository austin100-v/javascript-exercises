const repeatString = (string, times) => {
    let output = "";
    for (let i = 0; i < times; i++) {
        output += string;
    }
    return output;
};

console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
