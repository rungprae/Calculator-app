let result = document.getElementById("resultnum");

function cal(num) {
  let position = 0;
  let output = "";
  num = (num + "")
    .replaceAll(/\,/gm, "")
    .replaceAll(/\+{2,}/gm, "+")
    .replaceAll(/\-{2,}/gm, "-")
    .replaceAll(/\*{2,}/gm, "*")
    .replaceAll(/\/{2,}/gm, "/")
    .replaceAll(/\.{2,}/gm, ".");
  for (let i = num.length - 1; i >= 0; i--, position++) {
    console.log("isNaN====>", num[i], !isNaN(num[i]));
    if (!isNaN(num[i])) {
      if (position > 0 && position % 3 === 0) {
        output = num[i] + "," + output;
      } else {
        console.log("output:", output, num[i]);
        output = num[i] + output;
      }
      console.log("out", output);
    } else {
      position = 0;
      output = num[i] + output;
    }
  }
  return output;
}

document.querySelector(".num-1").addEventListener("click", calculate1);
function calculate1() {
  let one = result.value + 1;
  let oneCommas = cal(one);
  result.value = oneCommas;
}
document.querySelector(".num-2").addEventListener("click", calculate2);
function calculate2() {
  let two = result.value + 2;
  let twoCommas = cal(two);
  result.value = twoCommas;
}
document.querySelector(".num-3").addEventListener("click", calculate3);
function calculate3() {
  let three = result.value + 3;
  let threeCommas = cal(three);
  result.value = threeCommas;
}
document.querySelector(".num-4").addEventListener("click", calculate4);
function calculate4() {
  let four = result.value + 4;
  let fourCommas = cal(four);
  result.value = fourCommas;
}
document.querySelector(".num-5").addEventListener("click", calculate5);
function calculate5() {
  let five = result.value + 5;
  let fiveCommas = cal(five);
  result.value = fiveCommas;
}
document.querySelector(".num-6").addEventListener("click", calculate6);
function calculate6() {
  let six = result.value + 6;
  let sixCommas = cal(six);
  result.value = sixCommas;
}
document.querySelector(".num-7").addEventListener("click", calculate7);
function calculate7() {
  let seven = result.value + 7;
  let sevenCommas = cal(seven);
  result.value = sevenCommas;
}
document.querySelector(".num-8").addEventListener("click", calculate8);
function calculate8() {
  let eight = result.value + 8;
  let eightCommas = cal(eight);
  result.value = eightCommas;
}
document.querySelector(".num-9").addEventListener("click", calculate9);
function calculate9() {
  let nine = result.value + 9;
  let nineCommas = cal(nine);
  result.value = nineCommas;
}
document.querySelector(".num-point").addEventListener("click", calculatePoint);
function calculatePoint() {
  let point = (result.value += ".");
  let pointReplace = cal(point);
  result.value = pointReplace;
}
document.querySelector(".num-zero").addEventListener("click", calculateZero);
function calculateZero() {
  let zero = result.value + 0;
  let zeroCommas = cal(zero);
  result.value = zeroCommas;
}
document.querySelector(".num-plus").addEventListener("click", calculatePlus);
function calculatePlus() {
  let plus = (result.value += "+");
  let plusReplace = cal(plus);
  result.value = plusReplace;
}
document.querySelector(".num-minus").addEventListener("click", calculateMinus);
function calculateMinus() {
  let minus = (result.value += "-");
  let minusReplace = cal(minus);
  result.value = minusReplace;
}
document
  .querySelector(".num-multiply")
  .addEventListener("click", calculateMultiply);
function calculateMultiply() {
  let multiply = (result.value += "*");
  let multiplyReplace = cal(multiply);
  result.value = multiplyReplace;
}
document
  .querySelector(".num-divide")
  .addEventListener("click", calculateDevide);
function calculateDevide() {
  let divide = (result.value += "/");
  let divideReplace = cal(divide);
  result.value = divideReplace;
}

document.querySelector(".cal-del").addEventListener("click", del);
function del() {
  result.value = result.value.slice(0, -1);
}

document.querySelector(".reset").addEventListener("click", reset);
function reset() {
  result.value = "";
}

document.querySelector(".equal").addEventListener("click", equal);
function equal() {
  result.value = eval(result.value);
}

let theme1 = document.querySelector(".theme1");
let theme2 = document.querySelector(".theme2");
let theme3 = document.querySelector(".theme3");
let body = document.querySelector("body");
theme1.addEventListener("click", function () {
  body.classList.remove("theme-two", "theme-three");
  body.classList.add("theme-one");
});
theme2.addEventListener("click", function () {
  body.classList.remove("theme-one", "theme-three");
  body.classList.add("theme-two");
});
theme3.addEventListener("click", function () {
  body.classList.remove("theme-one", "theme-two");
  body.classList.add("theme-three");
});
