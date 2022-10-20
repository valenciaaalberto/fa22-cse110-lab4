let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for (let property in statistics) {
    //check if the letter r is at position 0 or whether the val is odd
    if(property.indexOf('r') == 0 || statistics[property] % 2 == 1){
        console.log(statistics[property]);
    }
  }