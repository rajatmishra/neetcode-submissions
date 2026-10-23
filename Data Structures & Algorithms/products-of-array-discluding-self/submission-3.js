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
       for(let j=n-1;j>=0;j--)
       {
        res[j] = res[j] * suffix;
        suffix = suffix * nums[j];
       }
       return res;
    }
}
