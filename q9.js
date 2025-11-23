function displayCar(){
    console.log("This is a car.");
}
function displayTruck(){
    console.log("This is a Truck.");
}
function displayBike(){
    console.log("This is a Bike.");
}

function vehicleInfo(type, callback){
    console,log("Vehicle Type: " + type);
    callbackFn();
}

vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)
