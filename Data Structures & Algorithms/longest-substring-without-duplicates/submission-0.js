class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left=0;
        let obj = new Set();
        let longest =0;
        for(let right =0;right<s.length;right++)
        {
            while(obj.has(s[right]))
            {
              obj.delete(s[left]);
              left++;
            }
            obj.add(s[right]);
            let currentLength = right -left + 1;
            longest = Math.max(longest,currentLength)
            

        }
        return longest

    }
}
