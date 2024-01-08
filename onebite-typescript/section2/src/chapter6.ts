// any
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;

let num: number = 10;
num = anyVar;

// unknown
// 반대로는 아무거나 입력 불가
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if (typeof unknownVar === "number") {
    num = unknownVar;
}
