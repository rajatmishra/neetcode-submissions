class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice=Infinity;
        let profit = 0;
        for(let i=0;i<prices.length;i++)
        {
            if(prices[i]<minPrice)
            {
                minPrice = prices[i];
            }

            profit = Math.max(profit, prices[i]-minPrice)
        }
        return profit
    }
}
