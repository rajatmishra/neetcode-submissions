class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        let obj = new Set(nums);
        for (let num of nums) {
            if (!obj.has(num - 1)) {
                let currNum = num;
                let counter = 1;

                while (obj.has(currNum + 1)) {
                    currNum++;
                    counter++;
                }
                longest = Math.max(longest, counter);
            }
        }
        return longest;
    }
}
