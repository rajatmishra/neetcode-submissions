class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let sudoArr = new Set();
       for(let item of nums)
       {
        if(sudoArr.has(item))
        {
            return true;
        }
        sudoArr.add(item)
       }
        return false;
    }
}
