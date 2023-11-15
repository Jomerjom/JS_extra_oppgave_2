
// READ CAREFULLY!!

// Complete the function below to accomplish the following:

// Return the string received in the first parameter with the following alterations:
// any letter in the string matching charA (the second parameter in the function) will be replaced with
// charB (the third parameter) and VICE VERSA - meaning letters matching charA will be replaced with charB,
// and letters matching charB will be replaced with charA. See the expected console log comments below.

function doubleSwap(param1, param2, param3) {
    let newString = "";
    for (let i = 0; i < param1.length; i++) {
        if (param1[i] === param2) {
            newString += param3;
        } else if (param1[i] === param3) {
            newString += param2;
        } else {
            newString += param1[i];
        }
    }
    console.log(newString);
}

doubleSwap("thsi si a itrsng", "i", "s");

let string = "thsi si a itrsng";
const newpog = string.split('');
console.log(newpog);
console.log(newpog.map(char => char === "i" ? "s" : char).join(''))

// trying to code it shorter
function twoSwap(param1, param2, param3) {
    const newString = param1.split('').map(char => char === param2 ? param3 : char === param3 ? param2 : char).join('');
    console.log(newString);
}

twoSwap("thsi si a itrsng", "i", "s");




//  this should log the following:

//  thsi si a itrsng
//  maybe another approach is necessary
//  whao is ohe ptino tf ohis?
//  C!hJh%g&hu78UHb(!bghdsl#dak!fgdalg
//  elt's do onl east tlst