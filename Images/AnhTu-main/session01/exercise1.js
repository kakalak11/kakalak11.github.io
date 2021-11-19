//Bai tap 1

function baitap1() {
  let number = 10000000;
  let number1 = 123456;
  let number2 = 12000.02;

  function formatNumber(number) {
    let num = Intl.NumberFormat().format(number);

    return num;
  }

  console.log("Format số của 10000000: ", formatNumber(number));
  console.log("Format số của 123456: ", formatNumber(number1));
  console.log("Format số của 12000.02: ", formatNumber(number2));
}

//Bai tap 2

function baitap2() {
  function shortenNumber(number) {
    if (number >= 1000000000) {
      number = (number / 1000000000).toFixed(2) + " B";
    } else if (number >= 1000000) {
      number = (number / 1000000).toFixed(2) + " M";
    } else if (number >= 1000) {
      number = (number / 1000).toFixed(2) + " K";
    }
    return number;
  }

  console.log("Giá trị rút gọn của 1000000000: ", shortenNumber(1000000000));
  console.log("Giá trị rút gọn của 100000: ", shortenNumber(100000));
  console.log("Giá trị rút gọn của 1000: ", shortenNumber(1000));
  console.log("Giá trị rút gọn của 1123400000: ", shortenNumber(1123400000));
  console.log("Giá trị rút gọn của 1342222: ", shortenNumber(1342222));
}

//Bai tap 3

function baitap3() {
  let string = "oneTwoThree";
  let string1 = "aQuickBrownFox";

  function countWord(string) {
    let wordCount = 1;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == string[i].toUpperCase()) {
        wordCount++;
      }
    }

    return wordCount;
  }

  console.log("The number of word in oneTwoThree is: ", countWord(string));
  console.log("The number of word in aQuickBrownFox is: ", countWord(string1));
}
//Bai tap 4

function baitap4() {
  function extension(fileName) {
    let extensionName = fileName.slice(fileName.length - 3, fileName.length);

    return extensionName;
  }

  let file = "image.png";

  console.log("Định dạng của image.png là: ", extension(file));
  console.log("Định dạng của sound.mp3 là: ", extension("sound.mp3"));
}

baitap1();
baitap2();
baitap3();
baitap4();
