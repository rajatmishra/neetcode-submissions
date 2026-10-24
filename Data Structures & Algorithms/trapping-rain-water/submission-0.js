class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;

        if (n === 0) return 0;
        let prefix = new Array(n);
        let suffix = new Array(n);
        let largestPrefix = 0;
         let largestSuffix = 0;
        for(let i=0;i<height.length;i++)
        {
            largestPrefix = Math.max(largestPrefix, height[i]);
            prefix[i] = largestPrefix
        }
        for(let i=height.length-1;i>=0;i--)
        {
            largestSuffix = Math.max(largestSuffix, height[i]);
            suffix[i] = largestSuffix;
        }
        console.log(prefix)
        console.log(suffix)
         let totalWater = 0;

        for (let i = 0; i < n; i++) {
            let waterLevel = Math.min(prefix[i], suffix[i]);
            totalWater += waterLevel - height[i];
        }
        return totalWater;
    }
}
