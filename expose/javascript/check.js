/*
function sumValues(num1, num2, add){
    if(add){
        const result = 0;
        result = num1 + num2;
        console.log('values added',result);
    }else return;
    console.log('final result', result);
}
sumValues(10,10,true);
*/
function discountPrices(prices, discount){
    const discounted = [];
    const length = prices.length;
    for(let i = 0; i < length;i++){
        const discountedPrice = prices[i] * (1-discount);
        discounted.push(discountedPrice);
     }
     //console.log(length);
     return discounted;
}
console.log(discountPrices([100,200,300],.5));