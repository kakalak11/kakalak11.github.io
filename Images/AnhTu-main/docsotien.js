const numLetters = [
    "không",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
    "mười",
];
const numPosition = ["vạn", "nghìn", "trăm", "mươi", "linh"];

const number = 20406;
let numberArray = Array.from(String(number), Number);
if (numberArray.length != 6) {
    for (let i = numberArray.length; i < 6; i++) {
        numberArray.unshift(" ");
    }
}
let stringArray = [];

console.log(numberArray);

function docTien(numberArray) {
    for (let i = 0; i < 6; i++) {

        if (i === 0) {
            if (numberArray[0] === 0) {
                stringArray.push(" ");
                continue;
            }
            else if (numberArray[0] === 1) {
                stringArray.push(numLetters[10]);
                continue;
            }
            else {
                stringArray.push(numLetters[numberArray[i]] + " " + numPosition[3]);
                continue;
            }
        }

        if (i === 4 && numberArray[i] === 0) {
            continue;
        }

        if (i === 5 && numberArray[i - 1] === 0) {
            stringArray.push("linh " + numLetters[numberArray[i]]);
            continue;
        }
        else if (i === 5 && numberArray[i] === 0) {
            continue;
        }
        else if (i === 5) {
            stringArray.push(numLetters[numberArray[i]]);
            continue;
        }

        stringArray.push(numLetters[numberArray[i]] + " " + numPosition[i - 1]);
    }
}

docTien(numberArray);

console.log(stringArray);
for (let i = String(number).length; i < 6; i++) {
    stringArray.shift();
}

let string = stringArray.join(" ");

console.log(string);

