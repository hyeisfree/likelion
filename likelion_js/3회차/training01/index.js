/* DOM 요소 불러오기 */
/**@TODO : score 인풋과 제출 btn 불러오기 */
const scoreInput = document.querySelector("#score");

const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // submit했을 때 새로고침되는 현상을 막습니다.

  /** @TODO : scoreInput에 입력된 점수를 불러오기 */
  scoreInput.value;
  const score = scoreInput.value;
  //const scoreNumber = Number(scoreInput.value); 문자열 값을 숫자로 바꿔줌.(다희님 코드)
  console.log(score);
  /** @TODO : 조건문 만들어 학점 출력하기 */
  //let grade;
  /**
   * 90점 이상은 "A",
   * 80점 이상은 "B",
   * 70점 이상은 "C",
   * 그 이하는 "F"를 출력하기
   * */
  if (score > 89) {
    console.log("A");
  } else if (score > 79) {
    console.log("B");
  } else if (score > 69) {
    console.log("C");
  } else console.log("F");
});
//   if (score >= 90) {
//     console.log("A");
//   } else if (score >= 80 && score < 90) {
//     console.log("B");
//   } else if (score >= 70 && score < 80) {
//     console.log("C");
//   } else console.log("F");
// });
// if (score >= 90) {
//  grade = "A";
//} else if (score >= 80) {
//  grade = "B";
//} else if (score >= 70) {
//  grade = "C";
//} else grade = "F";
// else if (score >= 70)
//alert("당신의 학점은 " + grade + "입니다.");

//console.dir(scoreInput); dom
