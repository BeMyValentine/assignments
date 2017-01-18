var allEnemies = [];


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function determineType() {
    var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
    var rand = getRandomInt(0, 2);
    Math.floor(Math.random() * enemyTypes.length)
    return enemyTypes[rand];

}


function determineHitPoints(type) {
    if (type === "Ancient Dragon") {
        return getRandomInt(80, 100);
    } else if (type === "Prowler") {
        return getRandomInt(50, 79);
    } else {
        return getRandomInt(20, 49);
    }
}

function Enemy() {
    this.type = determineType();
    this.hitPoints = determineHitPoints(this.type);
    this.defense = this.hitPoints * 3;

};

for (var i = 0; i < 100; i++) {
    var newEnemy = new Enemy();
    allEnemies.push(newEnemy);

}
console.log(allEnemies);