/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var  i = 0;
    var profit = 0;
    while(i < prices.length){
        if(prices[i] < prices[i+1]){
            profit = profit + (prices[i+1] - prices[i])
            i++;
        }
        else{
            i++;
        }
    }
    return profit;
};