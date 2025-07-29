/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let C = 0, maxC = 0;

    for(i = 0; i < nums.length; i++)
    {
        if(nums[i] == 0)
        {
            C = 0;
        }
         else
        {
            C = C + 1;
        }
        if(C > maxC)
        {
           maxC = C;
        }
    }
    return maxC;
};

// nums = [1,1,0,1,1,1];

// output = findMaxConsecutiveOnes(nums);

// console.log(output);
