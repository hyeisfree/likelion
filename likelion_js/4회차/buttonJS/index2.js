/* DOM */
const checkBox = document.querySelector("#inputDisabled");
const button = document.querySelector("#button");

/* Event Listener */
checkBox.addEventListener("change", (e) => {
  // 체크박스 클릭했을 때 발생하는 "change" 이벤트에 따른 효과를 등록합니다.
  console.log("changed");

  // 버튼 클래스에 disalbed가 있는가?
  // 있다면, "disabled" 클래스 제거
  // 없다면, "disabled" 클래스 추가
  button.classList.toggle("disabled"); //toggle 함수는 있으면 제거하고, 없으면, 추가하는 함수.
});
