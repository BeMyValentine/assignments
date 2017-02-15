

function Location() {
    
    this.display = "?";
    this.isShip = randomShip();
    this.isHit = false;
}



function randomShip() {
    var random = Math.floor((Math.random() * 5) + 1);
    if (random <= 1) {
        return true;
    } else {
        return false;
    }
}

//function randomHit(){
//    
//}




module.exports = Location;