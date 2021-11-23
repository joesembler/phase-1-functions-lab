// Code your solution in this file!

function distanceFromHqInBlocks(street){
    let distance;
    if (street < 42){
        distance = 42 - street;
    }
    else{
        distance = street - 42;
    }

    return distance;
}

function distanceFromHqInFeet(street){
    let distance;
    if (street < 42){
        distance = 42 - street;
    }
    else{
        distance = street - 42;
    }

    return distance * 264;
}

function distanceTravelledInFeet (start, destination){
    let distanceTravelled;
    if (destination > start){
        distanceTravelled = (destination - start) * 264;
    }
    else{
        distanceTravelled = (start - destination) * 264;
    }
    return distanceTravelled;
}

function calculatesFarePrice(start, destination){
    let farePrice;
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        farePrice = 0;
    }
    else if (distance > 400 && distance < 2000){
        farePrice = (distance - 400) * .02;
    }
    else if (distance >= 2000 && distance < 2500){
        farePrice = 25;
    }
    else{
        farePrice = "cannot travel that far";
    }
    return farePrice;
}