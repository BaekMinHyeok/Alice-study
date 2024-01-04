//타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "백민혁",
    nickname: "Edy",
    birth: "1995.09.11",
    bio: "안녕하세요",
    location: "인천시",
};

// 인덱스 시그니처

type CountryCodes = {
    [key: string]: string;
};
let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};

type CountryNumberCodes = {
    [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {};
