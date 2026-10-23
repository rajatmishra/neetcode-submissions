class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj= new Map();
        for(let i=0;i<nums.length;i++)
        {
            if(obj.has(nums[i]))
            {
                return true
            }
            obj.set(nums[i],i)
        }
        return false;
    }
}
