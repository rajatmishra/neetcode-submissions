class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let largest = 0;
        let i=0;
        let j = heights.length-1;
        while(i<j)
        {
            let area = (j-i)*Math.min(heights[i],heights[j]);
            largest = Math.max(largest,area);
            if(heights[i]<heights[j])
            {
                i++;
            }
            else{
                j--;
            }
        }
     return largest   
    }
}
