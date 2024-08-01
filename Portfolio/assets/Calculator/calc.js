const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "ac") {
      display.innerText = "";
    } else if (item.id == "clear") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText=eval(display.innerText.replace("%","/100"));
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Undefined";
      setTimeout(() => (display.innerText = ""), 2000);
    } else if (display.innerText == '%' && item.id == "equal") {
      display.innerText = "Expression Error";
      setTimeout(() => (display.innerText = ""), 2000);
    } else if(buttons=="%"){
        display.innerText = "Expression Error";;

    }else {
      display.innerText += item.id;
    }
  };
});

const sliderbtn = document.querySelector(".slider");
const calculator = document.querySelector(".calculator");
const sliderIcon = document.querySelector(".slider-icon");
let isDark = true;
sliderbtn.onclick = () => {
  calculator.classList.toggle("dark");
  sliderbtn.classList.toggle("activate");
  isDark = !isDark;
};