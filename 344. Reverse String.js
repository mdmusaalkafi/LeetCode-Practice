/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let j = (s.length - 1), i = 0;
    let temp;

    for(i = 0; i < s.length/2; i++)
    {
        //  console.log(s[i]);
        //  console.log(s[j]);
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;

        j = j - 1;
    }
    return s;       
};

// s = ["h","e","l","l","o"];
// output = reverseString(s);

// console.log(output);