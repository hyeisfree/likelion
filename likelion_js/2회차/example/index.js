// console.log()
// 배열
// 1. document해서 요소 선택하기
const B = document.getElementById('button2');

console.log(B);

B.addEventListener('click', () => {
    alert('click!');
})
// 2. document 해서 요소 생성하기

// 3. document 요소 수정하기

// 4. window.alert()
const A = document.querySelectorAll("button1");

console.log(A);

A.addEventListener('click', () => {
    alert('click!');
})