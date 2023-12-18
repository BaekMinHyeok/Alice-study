HTML script 태그 속성인 async와 defer의 차이를 설명해주세요.

-   ### <script>
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/976b641b-2e6b-431e-9b42-97c07d7d244f/facff9e3-6e61-4e03-9962-53c8bc92bdbe/Untitled.png)
    -   asynce, defer 모두 사용하지 않은 기본 모드로 브라우저는 문서를 파싱해 읽다가 자바스크립트를 만나면 진행하고 있었던 파싱을 멈추고 스크립트를 다운-> 파싱 -> 실행한 후 다시 문서를 파싱하게 된다.
    -   스크립트는 인라인으로 선언된 경우, 파싱되고 실행되지만 외부 스크립트의 경우 다운로드한 후 파싱하고 실행된다.
    -   기본모드를 사용할 경우 스크립트를 다운/파싱/실행할 때까지 문서(HTML) 파싱이 중단돼 화면 랜딩 시간이 더 소요된다.
    ### <script async>
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/976b641b-2e6b-431e-9b42-97c07d7d244f/0609b427-909d-45e1-b61e-9d39559eea39/Untitled.png)
    -   async 속성을 쓰면 문서를 파싱하는 동안 스크립트를 만나면 문서 파싱과 함께 스크립트를 다운 받고 스크립트 다운이 완료되면 즉시 스크립트를 실행하게 된다. 다운로드가 끝나고 스크립트를 실행하는 동안은 문서(HTML) 파싱을 멈추고 스크립트 실행이 끝난 후 남은 문서를 읽는다.
    -   중간에 스크립트가 먼저 실행될 경우 문서(HTML)에서 아직 id나 class를 읽지도 않았는데 스크립트가 DOM을 참조하고 있으면 오류가 생길 것이다.
    -   async속성은 DOM을 조작하지 않고 스크립트 의존성이 없는 코드에만 쓰자.
    ### <script defer>
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/976b641b-2e6b-431e-9b42-97c07d7d244f/37aa4e9f-47e7-458e-bb0b-2ebdd83b8613/Untitled.png)
    -   브라우저가 defer 스크립트를 만났을 때 스크립트를 다운로드하지만 문서 파싱을 멈추지 않고 끝까지 수행하고 스크립트는 </httml> 태그를 만났을 때 실행한다. 즉 DOMContentLoaded 발생 이전에 실행해야 함을 나타내는 불리언 속성이다.
    -   defer를 사용하지 않으면 기본적으로 true 사용하면 false이다.
    -   일반 스크립트를 <body> 태그의 맨 마지막 줄에 위치시켜 작성하는 것과 비슷한 효과를 준다.
    -   DOM을 조작해 HTML 의존성이 있을 때 문서(HTML)을 모두 파싱한 후 실행되어야 할 때 쓰도록 하자.
