class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let n = nums.length;
        
        let left =0;
        let right = nums.length-1;
        while(left<=right)
        {
            let half = Math.floor((left + right) / 2);
            if(target === nums[half])
            {
                return half;
            }
            else if (target < nums[half])
            {
                right = half-1;
            }
            else{
                left = half+1
            }
        }
         return -1;
    }
}
