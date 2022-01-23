//Task 1
function filterNumbersArr(numbers) {
    var newArr = numbers.filter(function(el) {
        return el > 0;
    });

    return newArr;
}

filterNumbersArr([-1, 0, 2, 34, -2]);


//Task 2
function findPositiv(arr) {
    var found = arr.find(function (element) {
        return element > 0;
    });

    return (found);
}

    findPositiv([-1, 0, 2, 34, -2]);

//Task 3
function isPalindrome(str) {
    var strNew = str.toLowerCase().split('').reverse().join('');
    var strOld = str.toLowerCase();

    if (strNew == strOld) {
        return true;
    } else {
        return false;
    }
}

isPalindrome('шалаШ'); // true
isPalindrome('привет'); // false


//Task 4
function areAnagrams(str1, str2) {
    var str1New = str1.toLowerCase().split('').sort().join('');
    var str2New = str2.toLowerCase().split('').sort().join('');

    if (str1New == str2New) {
        return true;
    } else {
        return false;
    }
}

areAnagrams('кот', 'отк'); // true
areAnagrams('кот', 'атк'); // false
areAnagrams('кот', 'отко'); // false

//Task 5
function divideArr (arr, len) {

    var newArr = [];
    i = 0;

    while (i < arr.length) {
        newArr.push(arr.slice(i, i += len));
    }

    return newArr;
}

divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]