

myString = "ABC def GHI jkl MNO pqr STU vwx YZ"

function removeBlanks(str){
    var arr = str.split(" ");
    // arr.join("");
    return arr.join("");
}

// console.log(removeBlanks(myString));


function getDigits(str){
    var arr = str.split("");
    newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == '0' || arr[i] == '1' || arr[i] == '2' || arr[i] == '3' || arr[i] == '4' || arr[i] == '5' || arr[i] == '6' || arr[i] == '7' || arr[i] == '8' || arr[i] == '9'){
            newArr.push(arr[i]);
        }
    }
    var numArr = newArr.join('');
    return parseInt(numArr); //only way I could think of turning a String of numbers into an int

}

var str2 = "129dasjnfd0834";

// console.log(getDigits(str2));



function acronyms(str){
    var arr = str.split(' ');
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i][0].toUpperCase());
    }

    return newArr;
}

// console.log(acronyms(myString));


function countNonSpaces(str){
    // var total = 0;
    // var len1 = str.length;
    // var arr = str.split(' ');
    // var len2 = arr.length;
    // return len1 - len2;

    var total = 0;
    var arr = str.split('');
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == " "){
            total++;
        }
    }
    return arr.length - total;
}

// console.log(countNonSpaces(myString));


var myStrArr = [
    "21309-32-fdsaFD",
    "asd23",
    "asd23111",
    "as34k76",
    "2s4689-32asfd",
    "988903hfgdsAaFD",
    "6v6f23df-32-fdsaFD"
]


function removeShorterStrings(strArr, val){

    for(var i = 0; i < strArr.length; i++){
        if(strArr[i].length < val){
            strArr.splice(i,1);
            i--;
        }
    }

    return strArr;
}

console.log(removeShorterStrings(myStrArr, 9));