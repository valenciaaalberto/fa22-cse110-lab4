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
/*
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
*/
/*
let student = {

    name: 'Sarah', major: 'Computer Science', 'Grad Year':'2022',
    greeting: function(){console.log('Hello!');},'Favorite Teacher':{
        name: 'Thomas Powell',
        course: 'CSE 110'
    },courseload:['CSE 110','CSE 134','VIS 41'] 
};
console.log(student['function()']);
*/
/*
function modifyArray(array, callback){
    const newArr = [];
    for(let i = 0; i < array.length;i++){
        newArr.push(callback(array[i]));
    }
    return newArr;
}

function doSomething(num){
    return num * 2;
}
console.log(modifyArray([1,2,3],doSomething));
*/
function printNums(){
    console.log(1);
    setTimeout(function () { console.log(2); },1000);
    setTimeout(function() { console.log(3); },0);
    console.log(4);
}

printNums();