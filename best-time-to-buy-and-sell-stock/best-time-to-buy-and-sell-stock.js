/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var listPrice = prices[0];
    var profit = 0
    for(let i = 0; i <prices.length ; i++){
        if(listPrice >= prices[i]){
            listPrice = prices[i]
        }
        else if (listPrice < prices[i]){
            var temp = prices[i] - listPrice
            if (profit < temp){
                profit = temp
            }
        }
        else{
            return 0 
        }
    }
    return profit
};