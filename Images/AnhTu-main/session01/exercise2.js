//Bai tap 1
function baitap1() {
  function factorial(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }

  console.log("Giai thừa của 5 là ", factorial(5));
  console.log("Giai thừa của 8 là ", factorial(8));
}

//Bai tap 2
function baitap2() {
  function getRandomInt(min, max) {
    let randomValue = Math.floor(Math.random() * (max - min));

    while (randomValue === 0) {
      randomValue = Math.floor(Math.random() * (max - min));
    }

    return min + randomValue;
  }

  for (let i = 0; i < 10; i++) {
    console.log("Giá trị ngẫu nhiên từ 1 đến 10: ", getRandomInt(1, 10));
  }
}

//Bai tap 3
function baitap3() {
  let randomArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  function getRandomInt(min, max) {
    let randomValue = Math.floor(Math.random() * (max - min));

    while (randomValue === 0) {
      randomValue = Math.floor(Math.random() * (max - min));
    }

    return min + randomValue;
  }

  function getRandomElement(array) {
    let randomElement = array[getRandomInt(0, array.length)];
    return randomElement;
  }

  console.log("Mảng: ", randomArray);

  for (let i = 0; i < 10; i++) {
    console.log("Giá trị ngẫu nhiên trong một mảng: ", getRandomElement(randomArray));
  }
}

//Bai tap 4
function baitap4() {
  var first = [7, 2, 5, 3, 5, 3];
  var second = [7, 2, 5, 4, 6, 5, 3, 5, 3];

  var difference = second.filter(x => first.indexOf(x) === -1);
  console.log("Các phần tử khác biệt: ", difference);
}

baitap1();
baitap2();
baitap3();
baitap4();
