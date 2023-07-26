const plusButton = document.querySelector("button.plus");
const minusButton = document.querySelector("button.minus");
const value = document.querySelector(".value");

plusButton.addEventListener("click", () => {
  //plusButton 누르면?
  var tmp = Number(value.innerText);
  console.log(tmp);
  value.innerText = tmp + 1;
});

minusButton.addEventListener("click", () => {
  //minusButton 누르면?
  var tmp = Number(value.innerText);
  console.log(tmp);
  value.innerText = tmp - 1;
});

console.log(typeof value.innerText);
