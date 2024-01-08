// void
// void -> 공허 -> 아무것도 없다.

function func1(): string {
    return "hello";
}

function func2(): void {
    console.log("hello");
}

// never
// never -> 존재하지 않는

function func3(): never {
    while (true) {}
}
