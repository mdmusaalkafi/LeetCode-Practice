/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let lastIndex = (m + n) - 1;
    {
        for(; lastIndex >=0; lastIndex--)
        {
            if(m == 0 || n == 0) break;

            if(nums1[m - 1] > nums2[n-1])
            {
                nums1[lastIndex] = nums1[m-1];
                //console.log(nums1);
                m = m - 1;
            }
            else
            {
                nums1[lastIndex] = nums2[n-1];
                n = n - 1;
            }
        }
        while (n > 0)
        {
            nums1[lastIndex] = nums2[n-1];
            lastIndex--;
            n--;
        }
    }
};

    //nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
    //nums1 = [1], m = 1, nums2 = [], n = 0;

    
    //merge(nums1, m, nums2, n);

    //console.log(nums1);