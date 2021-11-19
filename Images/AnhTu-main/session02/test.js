// const containerBox = {
//     width: "600px",
//     height: "600px",
//     bgColor: "white",

// }

// const card = {
//     width: "80px",
//     height: "80px",
//     bgColor: "black",
//     margin: "10px"
// }

// function createContainerBox(attribute) {
//     var containerBox = document.createElement("div");
//     document.body.appendChild(containerBox);
//     containerBox.style.width = attribute.width;
//     containerBox.style.height = attribute.height;
//     containerBox.style.backgroundColor = attribute.bgColor;
//     // containerBox.style.position = "absolute";
//     containerBox.style.display = "flex";
//     containerBox.style.flexWrap = "wrap";
// }

// function createCard(attribute) {
//     var card = document.createElement("div");
//     containerBox.appendChild(card);
//     card.style.width = attribute.width;
//     card.style.height = attribute.height;
//     card.style.backgroundColor = attribute.bgColor;
//     card.style.margin = "10px";
// }

// function createDeck() {
//     for (let i = 0; i < 20; i++) {
//         createCard(card);
//     }
// }

var containerBox = document.createElement("div");
document.body.appendChild(containerBox);
containerBox.style.width = "800px";
containerBox.style.height = "auto";
containerBox.style.backgroundColor = "black";
// containerBox.style.position = "absolute";
// containerBox.style.display = "flex";
// containerBox.style.flexWrap = "wrap";

console.log("Hello World");