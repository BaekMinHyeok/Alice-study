-   -   답변

        > 브라우저에서는 보안적인 이유로 `cross-origin` HTTP 요청들을 제한합니다.
        >
        > 그래서 `cross-origin` 요청을 하려면 서버의 동의가 필요합니다.
        >
        > 만약 서버가 동의한다면 브라우저에서는 요청을 허락하고, 동의하지 않는다면 브라우저에서 거절합니다. 이러한 허락을 구하고 거절하는 메커니즘을 HTTP-header를 이용해서 가능한데, 이를 CORS(Cross-Origin Resource Sharing)라고 부릅니다.
        >
        > 그래서 브라우저에서 `cross-origin` 요청을 안전하게 할 수 있도록 하는 메커니즘입니다.
        >
        > -   `cross-origin`이란 다음 중 한 가지라도 다른 경우를 말합니다.
        >     1. 프로토콜 - http와 https는 프로토콜이 다르다.
        >     2. 도메인 - domain.com과 other-domain.com은 다르다.
        >     3. 포트 번호 - 8080포트와 3000포트는 다르다.
        >
        > CORS 해결 방법
        >
        > -   남이 만든 프록시 서버 사용하기
        > -   프록시 서버 구축하기
        > -   클라이언트 : http-proxy-middleware 사용하기
        > -   서버 : Access-Control-Allow-Origin 헤더 세팅하기
        > -   서버 : CORS 미들웨어 사용하기

        -   정리 :

    cors는 서로 다른출처의 cross-origin(프로토콜, 도메인,포트번호) HTTP 요청을 할떄 발생되는 현상이다
    서버에서 요청을 동의 하면 브라우저에서 요청하고 서버에서 비동의 하면 브라우저에서 요청을 막는다
    이를 해결하려면 외부 프록시 서버를 사용, 프록시서버 구축, 브라우저는 http-proxy-middleware 사용, 서버는 access-control-allow-origin(서버에서 헤더를 특정 도메인이나 모든 도메인으로 설정 헤더 설정,cors 미들웨어 사용

    -   조사
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/976b641b-2e6b-431e-9b42-97c07d7d244f/701149da-8c91-41ff-9008-193530edaf0d/Untitled.png)

        -   브라우저에서는 보안적인 이유로 `cross-origin` HTTP 요청들을 제한합니다.

            그래서 `cross-origin` 요청을 하려면 서버의 동의가 필요합니다.

            만약 서버가 동의한다면 브라우저에서는 요청을 허락하고, 동의하지 않는다면 브라우저에서 거절합니다. 이러한 허락을 구하고 거절하는 메커니즘을 HTTP-header를 이용해서 가능한데, 이를 CORS(Cross-Origin Resource Sharing)라고 부릅니다.

            그래서 브라우저에서 `cross-origin` 요청을 안전하게 할 수 있도록 하는 메커니즘입니다.

        -   `cross-origin`이란 다음 중 한 가지라도 다른 경우를 말합니다. 1. 프로토콜 - http와 https는 프로토콜이 다르다. 2. 도메인 - domain.com과 other-domain.com은 다르다. 3. 포트 번호 - 8080포트와 3000포트는 다르다.
            CORS 해결 방법
        -   남이 만든 프록시 서버 사용하기
        -   프록시 서버 구축하기
        -   클라이언트 : http-proxy-middleware 사용하기
        -   서버 : Access-Control-Allow-Origin 헤더 세팅하기
        -   서버 : CORS 미들웨어 사용하기
