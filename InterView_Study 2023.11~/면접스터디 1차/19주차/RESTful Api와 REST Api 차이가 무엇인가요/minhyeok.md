-   -   **REST의 구성 요소**
        -   1. 자원(Resource)
            -   URI모든 자원에는 고유한 ID가 존재하고, 이 자원은 Server에 존재합니다.
                자원을 구별하는 ID는 '/exgroups/:exgroup_id'와 같은 HTTP URI 입니다.
                Client는 URI를 이용해 자원을 지정하고 해당 자원의 상태(정보)에 대한 조작을 Server에 요청합니다. URN 리소스의 이름을 나타남
            -   https://velog.io/@younoah/uri-url-urn
        -   행위(Verb) - Method
            -   HTTP 프로토콜의 Method를 사용합니다.
                HTTP 프로토콜은 GET, POST, PUT, PATCH, DELETE의 Method를 제공합니다. ( CRUD )
            > GET
            > Read : 정보 요청, URI가 가진 정보를 검색하기 위해 서버에 요청한다.
            > POST
            > Create : 정보 입력, 클라이언트에서 서버로 전달하려는 정보를 보낸다.
            > PUT
            > Update : 정보 업데이트, 주로 내용을 갱신하기 위해 사용한다. (데이터 전체를 바꿀 때)
            > PATCH
            > Update : 정보 업데이트, 주로 내용을 갱신하기 위해 사용한다. (데이터 일부만 바꿀 때)
            > DELETE
            > Delete : 정보 삭제, (안전성 문제로 대부분 서버에서 비활성화한다.)
        -   표현 ( Representation of Resource )
            Client와 Server가 데이터를 주고받는 형태로 JSON, XML, TEXT, RSS 등이 있습니다.
            JSON, XML을 통해 데이터를 주고 받는 것이 일반적입니다.
    -   **REST의 특징**
        -   Server-Client (서버-클라이언트 구조)
            자원이 있는 쪽이 Server, 자원을 요청하는 쪽이 Client가 됩니다.
            REST Server는 API를 제공하고 비즈니스 로직 처리 및 저장을 책임지고,
            Client는 사용자 인증이나 context( 세션, 로그인 정보 ) 등을 직접 관리하고 책임집니다.
            역할을 확실히 구분시킴으로써 서로 간의 의존성을 줄입니다.
        -   Stateless (무상태)
            HTTP 프로토콜은 Stateless Protocol이므로 REST 역시 무상태성을 갖습니다.
            Client의 context를 Server에 저장하지 않습니다.
            즉, 세션과 쿠키와 같은 context 정보를 신경쓰지 않아도 되므로 구현이 단순해집니다.
            Server는 각각의 요청을 완전히 별개의 것으로 인식하고 처리합니다.
            각 API 서버는 Client의 요청만을 단순 처리합니다.
            즉, 이전 요청이 다음 요청의 처리에 연관되어서는 안됩니다. ( DB에 의해 바뀌는 것은 허용 )
            Server의 처리 방식에 일관성을 부여하기 때문에 서비스의 자유도가 높아집니다.
        -   Cacheable (캐시 처리 기능)
            웹 표준 HTTP 프로토콜을 그대로 사용하므로 웹에서 사용하는 기존의 인프라를 그대로 활용할 수 있습니다.
            즉, HTTP가 가진 가장 강력한 특징 중 하나인 캐싱 기능을 적용할 수 있습니다.
            HTTP 프로토콜 표준에서 사용하는 Last-Modified Tag 또는 E-Tag를 이용해 캐싱을 구현합니다.
            대량의 요청을 효율적으로 처리할 수 있습니다.
        -   Layered System (계층 구조)
            Client는 REST API Server만 호출합니다.
            REST Server는 다중 계층으로 구성될 수 있습니다.
            보안, 로드 밸런싱, 암호화 등을 위한 계층을 추가하여 구조를 변경할 수 있습니다.
            Proxy, Gateway와 같은 네트워크 기반의 중간매체를 사용할 수 있습니다.
            하지만 Client는 Server와 직접 통신하는지, 중간 서버와 통신하는지는 알 수 없습니다.
        -   Uniform Interface (인터페이스 일관성)
            URI로 지정한 Resource에 대한 요청을 통일되고, 한정적으로 수행하는 아키텍처 스타일을 의미합니다.
            HTTP 표준 프로토콜에 따르는 모든 플랫폼에서 사용이 가능하며, Loosely Coupling(느슨한 결함) 형태를 갖습니다.
            즉, 특정 언어나 기술에 종속되지 않음
        -   Self-Descriptiveness (자체 표현)
            요청 메시지만 보고도 쉽게 이해할 수 있는 자체 표현 구조로 되어있습니다.
    -   REST API의 정의
        -   REST의 특징을 기반으로 서비스 API를 구현한 것
            -   최근 OpenAPI(누구나 사용할 수 있도록 공개된 API: 구글 맵, 공공 데이터 등), 마이크로 서비스(하나의 큰 어플리케이션을 여러 개의 작은 어플리케이션으로 쪼개어 변경과 조합이 가능하도록 만든 아키텍처) 등을 제공하는 기업 대부분은 REST API를 제공합니다.
        -   REST API의 특징REST
            -   API의 가장 큰 특징은각 요청이 어떤 동작이나 정보를 위한 것인지를 그 요청의 모습 자체로 추론이 가능한 것 입니다.REST API 디자인 가이드REST API 설계 시 가장 중요한 항목은 다음의 2가지로 요약합니다.
            -   첫 번째,URI는 정보의 자원을 표현해야 한다.두 번째,자원에 대한 행위는 HTTP Method(GET, POST, PUT, PATCH, DELETE)로 표현한다.행위(Method)는 URI에 포함하지 않는다.
            -   REST API의 설계 규칙
            -   1. URI는 명사를 사용한다.(리소스명은 동사가 아닌 명사를 사용해야 한다.)
            -   1-1. 아래와 같은 동사를 사용하지 말 것/
                -   getAllUsers
                -   /getUserById
                -   /createNewUser
                -   /updateUser/
                -   deleteUser
            -   2. 슬래시( / )로 계층 관계를 표현한다.
            -   3. URI 마지막 문자로 슬래시 ( / )를 포함하지 않는다.
            -   4. 밑줄( \_ )을 사용하지 않고, 하이픈( - )을 사용한다.
            -   5. URI는 소문자로만 구성한다.
            -   6. HTTP 응답 상태 코드 사용- 클라이언트는 해당 요청에 대한 실패, 처리완료 또는 잘못된 요청 등에 대한 피드백을 받아야 한다.
                -   HTTP 상태 코드 정리 ex) 200,201,401,403,404,503 ….
            -   7. 파일확장자는 URI에 포함하지 않는다.
    -   그래서 REST API와 RESTful API의 차이는 뭘까?
        RESTful은 REST의 설계 규칙을 잘 지켜서 설계된 API를 RESTful한 API라고 합니다.
        즉,REST의 원리를 잘 따르는 시스템을 RESTful이란 용어로 지칭됩니다.
    > REST API를 간단히 요약하면URI는 정보의 자원만 표현해야 하며, 자원의 행위는 HTTP Method에 명시한다는 것입니다.
    -   REST API의 정책에 대해 알고있나요? 이런 게 지켜져야 RESTful API다 라고 말씀해 주실 수 있나요?
    -   기존 restful API 방식말고 다른 방식으로 구현한적이 있으신가요?
        graphql
