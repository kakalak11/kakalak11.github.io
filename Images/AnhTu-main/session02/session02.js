const container_box_width = "500px";
const container_box_height = "450px";
const bgColor = "white";
const matchArray = [];

let letterArray = ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K'];
let randomizedArray = shuffle(letterArray);


// const colorArray = ["red", "green", "blue", "purple", "orange", "pink", "yellow"]

var containerBox = document.createElement("div");
document.body.appendChild(containerBox);
containerBox.style.width = container_box_width;
containerBox.style.height = "auto";
containerBox.style.backgroundColor = bgColor;
containerBox.style.position = "absolute";
containerBox.style.display = "flex";
containerBox.style.flexWrap = "wrap";

// const box_width_number;
// const box_height_number;

// const box_width;
// const box_height;

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const createBox = function (number, letter) {
    this.letter = letter;
    this.number = number;
    var box = document.createElement("div");
    containerBox.appendChild(box);
    box.style.width = "80px";
    box.style.height = "80px";
    box.style.backgroundColor = "black";
    box.style.margin = "10px";

    var numLabel = document.createElement("div");
    box.appendChild(numLabel);
    numLabel.style.position = "relative";
    numLabel.style.top = "25px";
    numLabel.style.textAlign = "center";
    numLabel.innerHTML = String(this.number);
    numLabel.style.fontSize = "30px";
    numLabel.style.cursor = "pointer";
    numLabel.style.color = "white";

    box.addEventListener("click", function () {
        box.style.backgroundColor = bgColor;
        // box.style.backgroundImage =
        numLabel.innerHTML = letter;
        numLabel.style.color = "black";
        console.log("click");
        console.log(letter);

        checkMatch(letter);
    });

    // console.log("box " + this.number + " is created !!!");

    // box.addEventListener('mouseup', function () {
    //     console.log("mouse up");
    //     numLabel.innerHTML = String(number);
    //     box.style.backgroundColor = "grey";
    // })
}

for (let i = 1; i <= 20; i++) {
    let letter = randomizedArray[i - 1];
    createBox(i, letter);
}

function checkMatch(letter) {
    matchArray.push(letter);
    if (matchArray.length === 2) {
        if (matchArray[0] === matchArray[1]) {
            console.log("Match !!!");
            return true;
        }
        else {
            console.log("Not match...");
            return false
        }
    }
    console.log(matchArray);
}
