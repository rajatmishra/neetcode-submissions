class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let res = new Array(nums).fill(1);
       let n = nums.length;

       let prefix = 1;
       for(let i=0;i<n;i++)
       {
        res[i] = prefix;
        prefix = prefix * nums[i];
       }
       let suffix = 1;
       for(let i=n-1;i>=0;i--)
       {
        res[i] = res[i] * suffix;
        suffix = suffix * nums[i];
       }
       return res;
    }
}
