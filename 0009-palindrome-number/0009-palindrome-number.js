/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x=== reversedInt(x)
};
function reversedInt(num){
    const string =num.toString()
    const reversedString=string.split('').reverse().join('')
    const convertedNum=parseInt(reversedString,10)
    return convertedNum

}

