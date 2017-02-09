angular.module("clickerApp")
    .service("blueService", function () {

    this.blueFinal = 100;
    
            this.increment = function () {
                return this.blueFinal ++;
                
                 }
            this.decrement = function () {
                return this.blueFinal --;
            }
            
            this.reset = function () {
                return 100;
            }



        })