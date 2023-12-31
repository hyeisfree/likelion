/** <구현 요구사항>
 * 1. 버튼을 클릭하지 않았을 때는 "hidden" 클래스로 선택 옵션 상자가 가려져 있습니다.
 * 2. 버튼을 클릭하면 "hidden" 클래스가 사라져 선택 옵션 상자가 나타납니다.
 * 3. 옵션 위에 커서를 올리면 pointer 커서가 되며, 해당 옵션의 배경색이 바뀝니다.
 * 4. 옵션을 선택하면, 선택한 동물 이름으로 span 태그의 innerText가 변경됩니다.
 */
const ul = document.querySelector(".list-options");
const buttonm = document.querySelector(".btn-selector");
