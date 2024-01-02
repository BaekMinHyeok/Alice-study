// object 객체 리터럴 타입
let user: {
    id: number;
    name: string;
} = {
    id: 1,
    name: "백민혁",
};

// 값을 변경하지 않을 때
let config: {
    readonly apiKey: string;
} = {
    apiKey: "My API Key",
};
