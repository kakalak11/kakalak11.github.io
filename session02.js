const images = [
    "url(./Images/circle.png)",
    "url(./Images/diamond.png)",
    "url(./Images/halfsquare.png)",
    "url(./Images/heart.png)",
    "url(./Images/rectangle.png)",
    "url(./Images/shape.png)",
    "url(./Images/sixstar.png)",
    "url(./Images/square.png)",
    "url(./Images/star.png)",
    "url(./Images/triangle.png)",
    "url(./Images/triangle.png)",
    "url(./Images/circle.png)",
    "url(./Images/diamond.png)",
    "url(./Images/halfsquare.png)",
    "url(./Images/heart.png)",
    "url(./Images/rectangle.png)",
    "url(./Images/shape.png)",
    "url(./Images/sixstar.png)",
    "url(./Images/square.png)",
    "url(./Images/star.png)",
];

var containerBox = document.createElement("div");
document.body.appendChild(containerBox);
containerBox.style.width = "500px";
containerBox.style.height = "auto";
containerBox.style.backgroundColor = "black";
containerBox.style.position = "absolute";
containerBox.style.display = "flex";
containerBox.style.flexWrap = "wrap";


const ranImages = shuffle(images);
const numbers = [];
const cards = [];

let checkCards = [];
let temp = [];
var coin = 1000;

//Create an array holds all the cards
for (let i = 0; i < 20; i++) {
    var card = document.createElement("div")
    cards.push(card);
}



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

function mouseClick(id) {
    // console.log("mouse clicked on the card ", id);
    numbers[id].innerHTML = "";
    return true;
}

function checkCard() {
    if (checkCards[0] === checkCards[1]) {
        checkCards = [];
        return true;
    }
    else {
        checkCards = [];
        return false;
    }

}

function createNumberElement(number, index) {
    number.style.top = "25px";
    number.style.textAlign = "center";
    number.innerHTML = String(index + 1);
    number.style.fontSize = "30px";
    number.style.cursor = "pointer";

}


function displayCard(index) {
    cards[index].style.width = "80px";
    cards[index].style.height = "80px";
    cards[index].style.backgroundColor = "red";
    cards[index].style.margin = "10px";
    if (index === 19) {
        console.log("card displayed !");
    }
}

function showCard(index) {
    cards[index].style.backgroundImage = ranImages[index];
}

function coinCheck(check) {
    console.log("coin check");

    if (!gameOver(coin)) {
        if (check) {
            coin += 1000;
        }
        else {
            coin -= 500;
        }
        console.log(coin);
        gameOver(coin);
    }

}

function updateCoin() {
    var text = document.createElement("div");
    document.body.appendChild(text);
    text.style.position = "absolute";
    text.style.top = " 550px";
    text.innerHTML = "Coin: " + coin;
    text.style.backgroundColor = "white";
}

function gameStart() {
    running = true;
    updateCoin();
    for (let cardIndex = 0; cardIndex < 20; cardIndex++) {
        containerBox.appendChild(cards[cardIndex]);
        var number = document.createElement("div");
        cards[cardIndex].appendChild(number);
        numbers.push(number);
        createNumberElement(numbers[cardIndex], cardIndex);
        displayCard(cardIndex);

        cards[cardIndex].addEventListener("click", function () {
            if (mouseClick(cardIndex)) {
                showCard(cardIndex);
                checkCards.push(ranImages[cardIndex]);
                temp.push(cardIndex);

                if (checkCards.length == 2) {
                    if (checkCard(cardIndex) && temp[0] !== temp[1]) {
                        console.log("card matched");
                        temp = [];
                        coinCheck(true);
                        updateCoin();
                    }
                    else {
                        setTimeout(function () {
                            cards[temp[0]].style.backgroundImage = "none";
                            cards[temp[1]].style.backgroundImage = "none";
                            createNumberElement(numbers[temp[0]], temp[0]);
                            createNumberElement(numbers[temp[1]], temp[1]);
                            coinCheck(false);
                            temp = [];
                        }, 1000);
                        updateCoin();
                    }
                }
            }
        });

    }
}

function gameOver(coin) {
    if (coin < 0) {
        console.log("game over");
        var text = document.createElement("div");
        document.body.appendChild(text);
        text.style.position = "absolute";
        text.style.top = " 550px";
        text.innerHTML = "Game Over !";
        text.style.backgroundColor = "white";
        return true;
    }
    return false;
}

gameStart();

