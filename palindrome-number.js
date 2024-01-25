/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    // Convert the integer to a string
    const strX = x.toString();

    // Use two pointers to compare characters from the beginning and end
    let left = 0;
    let right = strX.length - 1;

    while (left < right) {
        if (strX[left] !== strX[right]) {
            // Characters don't match, not a palindrome
            return false;
        }

        // Move pointers towards each other
        left++;
        right--;
    }

    // All characters matched, it's a palindrome
    return true;  
};