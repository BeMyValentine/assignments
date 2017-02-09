angular.module("clickerApp")
    .service("redService", function () {

        this.redFinal = 100;

        this.increment = function () {
            
            return this.redFinal ++;
    
                
        }
        this.decrement = function () {
            
            return this.redFinal --;
    
        }
        
        this.reset = function () {
            
            return 100;
        
        }




    })