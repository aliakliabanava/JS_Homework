//Task 1
function getObject(arr) {
   return arr.map(function(item) {
        return {name: item};
    });
}

arr = ['Vasya', 'Tom', 'Ben'];
console.log(getObject(arr));


//Task 2
function arrToString(arr){
    return arr.reduce(function(sum, current) {
        return (sum + ' : ' + current);
    }, 'Текущее время');
}

arr = ['00', '13', '24'];
console.log(arrToString(arr));


//Task 3
function vowelTest(str) {
    var n = 0;
    for (i = 0; i < str.length; i++) {
        if ('aeiouy'.indexOf(str[i].toLowerCase()) !== -1) {
            n++;
        }
    }
    return n;
}

console.log(vowelTest("My text is super"));


//Task 4
function countSentencesLetters(input) {
    var output = input.split(/[\!\.\?]/).filter(function(item) {
        return item.length > 0;
    }).map(function(item) {
        return item.trim();
    });

    output.forEach(function(item) {
        var n = 0;
        for (var i = 0; i < item.length; i++) {
            if ([' ', ','].indexOf(item[i]) !== -1) n++;
        }
        console.log(item + ': Letters quantity is: ' + (item.length - n));
    });
}

countSentencesLetters("Привет, студент! Студент... Как дела, студент?");