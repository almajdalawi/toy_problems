/*
*
* Given an array representing prices of the stock on different days,
* find the maximum profit that can be earned by performing maximum of
* one transaction. A transaction consists of activity of buying and
* selling the stock on different or same days.
*
*/

/*
*
* For example in this array - [100, 80, 120, 130, 70, 60, 100, 125]
* the price of the stock on day-1 is 100, on day-2 is 80 and so on.
* The maximum profit that could be earned in this window is 65
* (buy at 60 and sell at 125).
* For price array - [100, 80, 70, 65, 60, 55, 50], maximum profit
* that could be earned is 0.
*
*/

// Feel free to add helper functions if needed
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

const maximumProfit = function (array) {
  let min = getMinOfArray(array)
  let max = getMaxOfArray(array)
  if (array.indexOf(max) > array.indexOf(min)) {
    return max - min
  } else {
    max = 0
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[j] - array[i] > max) { max = array[j] - array[i] }
      }
    }
    return max
  }
};


//////////


describe('maximumProfit', () => {
  it('calculate the maximum profit from stocks during a cirtain period of time', () => {
    expect(maximumProfit([100, 80, 120, 130, 70, 60, 100, 125])).toEqual(65)
    expect(maximumProfit([100, 80, 70, 65, 60, 55, 50])).toEqual(0)
    expect(maximumProfit([100, 180, 70, 65, 60, 55, 50])).toEqual(80)
    expect(maximumProfit([70, 65, 60, 55, 60, -100, -180])).toEqual(5)
    expect(maximumProfit([20, 50, 80, 100])).toEqual(80)
  })
})
