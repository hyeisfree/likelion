/** @TODO : 생성할 번호의 개수 입력받기 */

const number = prompt("생성할 번호의 갯수는 몇 개입니까?"); // 5
document.write("<p>숫자를 생성합니다.</p>");

/** @TODO : 랜덤 번호를 문서에 출력하기 */

let i;
for (i = 0; number > i; i++) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  document.write(randomNumber);
}
