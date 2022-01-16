function Animal(name) {
    this.name = name;
    var foodAmount = 0;
    var self = this;

    function formatFoodAmount(){
        return(foodAmount + ' гр');
    }

    this.feed = function() {
        console.log("Насыпаем в миску" + " "+ self.dailyNorm() +" "+ "корма.");
    };

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount(amount);
        if (amount < 50) {
            throw new Error("Мало корма!");
        }
        if (amount > 100) {
            throw new Error("Слишком много!");
        }
        foodAmount = amount;
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;

    this.feed = function (){
        animalFeed();
        console.log('Кот доволен ^_^');
        return this;
    }

    this.stroke = function (){
        console.log('Гладим кота.');
        return this;
    }
}

var barsik = new Cat('Барсик');
barsik.dailyNorm(90);
alert(barsik.dailyNorm());
barsik.feed().stroke();



