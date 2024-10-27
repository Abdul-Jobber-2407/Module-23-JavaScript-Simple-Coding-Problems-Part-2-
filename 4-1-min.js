const prices = [20000,16000,50000,10000,12000,100000,30000,52000];
function getMin (prices){
    let min = prices[0];
   for(const number of prices){
        if(number<min){
            min = number;
        }
   }
   return min;
}
const cheap = getMin(prices);
console.log('cheapest one is :', cheap);