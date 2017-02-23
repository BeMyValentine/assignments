// Suppose we could access yesterday's stock prices as a list, where:
//
// The values are the price in dollars of Apple stock.
//     A higher index indicates a later time.
//     So if the stock cost $500 at 10:30am and $550 at 11:00am, then:
//
// stock_prices_yesterday[60] = 500
//
// Write an efficient function that takes stock_prices_yesterday and returns
// the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
//
//     For example:
//
//     stock_prices_yesterday = [10, 7, 5, 8, 11, 9]
//
// get_max_profit(stock_prices_yesterday)
// # returns 6 (buying for $5 and selling for $11)
//
//     No "shorting"—you must buy before you sell. You may not buy and sell in the same
// time step (at least 1 minute must pass).


function stock_prices_yesterday(array) {
    var lowestNumber = [];
    var maxProfit = 0
    for (var i = 0; i < array.length; i++) {
        for (var j = i+1; j < array.length; j++);

    }
    if (array[i] < array[j] && i < lowestNumber.indexOf(0)) {
        lowestNumber.splice(0, 1);
        lowestNumber.push(array[i]);

    } else {

        maxProfit === array[i]
    }


    console.log(maxProfit - lowestNumber);
}

stock_prices_yesterday([10, 7, 5, 8, 11, 6]);
