// <!-- 1. 처음에는 버튼이 활성화 되어 있음. -->
//     <!-- 2. 체크박스를 선택하면 button 태그에 disabled 클래스 추가 -->
//     <!-- 3. disabled 클래스를 추가하면, 버튼이 비활성화된다. -->
//     <!-- index.js에서 컨트롤 가능 -->
/* DOM */
const checkBox = document.querySelector("#inputDisabled");
/*".button" 이라는 클래스 요소를 가지고 오고 싶을 때 사용. const button = document.querySelector(".button");*/
const button = document.querySelector("#button");

/* Event Listener */
checkBox.addEventListener("onclick", () => {}); /*onclick 이벤트를 발생하겠다.*/
checkBox.addEventListener("change", (e) => {
  // 체크박스 클릭했을 때 발생하는 "change" 이벤트에 따른 효과를 등록합니다. 값이 변경된 것을 감지하는 이벤트 change
  console.log("changed");
  // console.dir(button);
  //console.log(button.classList);
  // console.log(button.classList.add("disabled"));

  // 버튼 클래스에 disalbed가 있는가?
  console.log(button.classList.contains("disabled"));
  // 있다면, "disabled" 클래스 제거
  //if (button.classList.contains("disabled")) {
  //button.classList.remove("disabled");
  // }
  // 없다면, "disabled" 클래스 추가
  //else {
  //button.classList.add("disabled");
  //}

  if (button.classList.contains("disabled")) {
    button.classList.remove("disabled");
  } else {
    button.classList.add("disabled");
  }
});
