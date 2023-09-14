toUpperCase() //대문자
toLowerCase() //소문자

// replace() 문자 변환, 치환

// 첫번째 인수는 교체되어야할 값
// 두번째 인수는 그 자리를 교체해서 들어가려는 값

let annoyingLaugh = 'teehee so funny! teehee!';
annoyingLaugh.replace('teehee', 'haha') //'haha so funny! teehee!'
//Notice that it only replaces the first instance

// slice() 배열 자르기
let str = 'supercalifragilisticexpialidocious'
str.slice(0, 5); //'super'
str.slice(5); //'califragilisticexpialidocious'

Math.floor() //내림
Math.ceil() //올림

indexOf() //문자위치
const password = propmpt("Enter your password");
if (password.length >= 6 && password.indexOf('') === -1) {} // 비밀번호 6자리 이상 이고 공백이 없는 조건


// Array Methods
Push() //add to end 끝에 추가
Pop() // remove from end 끝에서 제거
Shift() // remove from start 처음부터 제거 
Unshift() // add to start 시작에 추가

concat() //  문자열,배열 합치기
// ex) const arr1 = new Array ("배열 1", "배열 2");
//    const arr2 = new Array ("배열 3", "배열 4");
//    const arr = arr1.concat(arr2);
//    arr : 배열 1,배열 2,배열 3,배열 4

includes() //문자열이 포함되어 있는지 확인하는 데 사용(boolean)
const text = "Hello, world!";
const searchTerm = "world";
const result = text.includes(searchTerm);
console.log(result); // true

indexOf() // 특정 문자 위치 찾기 
const fruits = ['apple', 'banana', 'cherry', 'date', 'cherry'];
const firstIndex = fruits.indexOf('cherry'); // 첫 번째 'cherry'의 인덱스는 2입니다.
const secondIndex = fruits.indexOf('cherry', 3); // 세 번째 요소부터 검색하여 두 번째 'cherry'의 인덱스는 4입니다.

reverse() //문자열, 배열을 뒤집어서 업데이트
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]


slice() // 배열 자르기
const fruits = ["사과", "바나나", "체리", "딸기", "포도"];
const slicedFruits = fruits.slice(1, 3); //1부터 3전까지
console.log(slicedFruits); // ["바나나", "체리"]

splice() // 배열의 내용을 추가하거나 제거하는 데 사용 후 업데이트
  >
  array.splice(start, deleteCount, item1, item2, ...)

//start: 수정을 시작할 인덱스를 나타내는 정수 값입니다.
//deleteCount: 제거할 요소의 수를 나타내는 정수 값입니다. 만약 0 이상의 값으로 설정하면 해당 인덱스부터 시작하여 해당 수만큼의 요소를 제거합니다.
//item1, item2, ...: 추가할 요소들입니다. 이러한 요소들은 배열에 삽입됩니다.

sort() // 배열 내의 값들이 오름차순으로 정렬(첫번째자리 기준)업데이트
[3, 1, 2].sort();
// [1, 2, 3]
[100, 3, 1, 20].sort();
// [1, 100, 20, 3]


toSort() // 원본 배열을 건드리지 않고 정렬된 배열 사본
const nums = [3, 1, 2];
const sortedNums = [...nums].sort();
console.log({
  nums,
  sortedNums
}); {
  nums: [3, 1, 2],
  sortedNums: [1, 2, 3]
}

객체
const midterms = {
  danielle: 96,
  thomas: 79
}
midterms.thomas = "C+"
midterms['danielle'] = "A"
//midterms = {danielle: "A", thomas: "C+"}


//for 루프
for (let i = 1; i <= 10; i++) {
  console.log(i);
  //1~10까지
}
for (let num = 1; num <= 10; num += 1) {
  console.log(num)
}