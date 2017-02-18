var player = {
    name: "",
    totalCoins: 0,
    status: "small",
    star: false,
    setName: function (namePicked) {
        this.name = namePicked;
    },
    gotHit: function (statusPicked) {
        if (this.status === "Powered Up") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Small";
        } else if (this.status === "Small") {
            this.status = "Dead";
            this.gameActive = false;
        } else {
            console.log("You're already dead!");
        }
    },
    gotPowerup: function () {
        switch (this.status) {
        case "Small":
            this.status = "Big";
            break;
        case "Big":
            this.status = "Powerup";
            break;
        default:
            break;
        }
    },
    gameActive: true,
    addcoin: function () {
        this.totalCoins += 1;
    },
    print: function(){
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins:${this.totalCoins} ${this.totalCoins}`);
    }

};

player.setName("Mario");
player.addcoin();
player.addcoin();
player.print();

