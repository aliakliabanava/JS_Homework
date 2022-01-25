//Task 1
function Animal(name) {
    this.name = name;
    this._foodAmount = 0;
}

Animal.prototype._formatFoodAmount = function(){
    return(this._foodAmount + ' гр');
}

Animal.prototype.feed = function() {
    console.log("Насыпаем в миску" + " "+ this.dailyNorm() +" "+ "корма.");
};

Animal.prototype.dailyNorm = function(amount) {

    if (!arguments.length) return this._formatFoodAmount();
    if (amount < 50) {
        throw new Error("Мало корма!");
    }
    if (amount > 100) {
        throw new Error("Слишком много!");
    }

    this._foodAmount = amount;
}

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');
    return this;
}


var barsik = new Cat('Барсик');
barsik.dailyNorm(190);
alert(barsik.dailyNorm());
barsik.feed().stroke();




//Task 2
function deepClone(original) {
    if (Array.isArray(original)) {
        var copy = [];
        for (var i = 0; i < original.length; i++) {
            copy[i] = deepClone(original[i]);
        }
        return copy;
    } else if (typeof original === "object" && original) {
        var copy = {};
        for (key in original) {
            copy[key] = deepClone(original[key])
        }
        return copy;
    }
    else {
        return original;
    }
}

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);



//Task 3
function deepEqual(first, second) {
    if( first === second ) return true;
    var firstProps = Object.getOwnPropertyNames(first);
    var secondProps = Object.getOwnPropertyNames(second);
    if( firstProps.length != secondProps.length ) return false;
    for(var i=0; i<firstProps.length; i++) {
        var prop = firstProps[i];
        switch( typeof( first[prop] ) ) {
            case 'object':
                if( !deepEqual(first[prop], second[prop]) ) return false;
                break;
            case 'function':
                if (deepEqual(first[prop].toString(), second[prop].toString())) break;
            default:
                if( first[prop] != second[prop] ) return false;
        }
    }
    return true;
}

var a = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var b = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

deepEqual(a,b);
