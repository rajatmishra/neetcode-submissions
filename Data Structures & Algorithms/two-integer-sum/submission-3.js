class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = new Map();
        for(let i=0;i<nums.length;i++)
        {
            let check = target - nums[i];
            if(seen.has(check))
            {
                return [seen.get(check),i]
            }
            seen.set(nums[i],i)
        }

    }
}
