/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let x = 0, flag = 0 ;
    let i = 0;

    for(i = 0; i < nums.length; i++)
    {
        if(nums[i] == val)
        {
            // i = i + 1;
            continue;
        }
        nums[x] = nums[i];
        x = x + 1;
    }
    return x;
};

// nums = [0,1,2,2,3,0,4,2];
// val = 2;
// output = removeElement(nums, val);
// console.log(output);   
// console.log(nums);
