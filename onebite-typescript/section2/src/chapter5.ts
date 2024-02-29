//enum 타입
// 여러가지 값들에 각각 이름에 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN,
    USER,
    GUEST,
}

enum Language  {
  korean = "ko",
  english = "en"
}
const user1 = {
    name: "백민혁",
    role: Role.ADMIN, //0은 관리자
    language: Language.korean
};
const user2 = {
    name: "홍길동",
    role: Role.USER, //1은 일반 유저
};
const user3 = {
    name: "아아",
    role: Role.GUEST, //2는 게스트
};
