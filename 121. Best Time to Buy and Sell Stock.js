/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0, minBuy = prices[0], mxProfit = 0;
    
    for(i = 1; i < prices.length; i++)
    {
        if(prices[i] < minBuy)
        {
            minBuy = prices[i]; 
        }

        profit = prices[i] - minBuy;

        if(profit > mxProfit) mxProfit = profit;
            
             //console.log(profit);
             //console.log(mxProfit);
    }

    return mxProfit;
};

// //prices = [7,1,5,3,6,4];
// prices = [7,6,4,3,1];
//  output = maxProfit(prices);
//  console.log(output);
