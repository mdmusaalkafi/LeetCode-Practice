/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let p1 = 0;

    for(i = 0; i < nums.length; i++)
    {
        if(nums[i]!==0)
        {
            nums[p1] = nums[i];
            p1 = p1 + 1;
        }
    }
    for( ; p1 < i; p1++)
    {
        nums[p1] = 0;
    }
};
// nums = [0,1,0,3,12];
// moveZeroes(nums);
// console.log(nums);