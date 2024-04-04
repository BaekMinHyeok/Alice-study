1. **Google PageSpeed Insights**: 구글의 PageSpeed Insights는 사이트의 성능을 분석하고 개선할 수 있는 다양한 정보를 제공합니다. 페이지 로드 속도 및 성능 관련 권고 사항을 확인할 수 있습니다.
2. **Lighthouse**: 구글의 Lighthouse는 Chrome 개발자 도구의 일부로 제공되며, 웹 페이지의 성능을 측정하고 개선하는 데 도움이 됩니다. 이는 페이지 로드 시간, 성능 메트릭, 접근성 및 SEO에 대한 정보를 제공합니다.
3. **웹 브라우저 개발자 도구**: 대부분의 현대적인 브라우저는 개발자 도구를 통해 네트워크 탭을 제공합니다. 이를 사용하여 사이트의 리소스 로드 시간을 측정하고, 어떤 부분이 느린지 식별할 수 있습니다.
4. **크롬의 DevTools Performance 탭**: 크롬의 개발자 도구에서 Performance 탭을 사용하여 페이지의 로딩 및 렌더링 과정을 시간별로 측정할 수 있습니다. 이를 통해 렌더링 성능에 영향을 주는 요소들을 확인할 수 있습니다.
5. **웹사이트 로드 시간 측정 도구**: 웹사이트 로드 시간을 측정하는 다양한 온라인 도구들이 있습니다. 이들을 사용하여 사이트의 전체적인 성능을 측정하고 비교할 수 있습니다.

-   최적화 항목
    -   1. FCP (First Contentful Paint)
        !https://images.velog.io/images/bumsu0211/post/b82d255c-b8fb-4246-82f9-28d0cf54f216/Untitled%2012.png
        -   페이지가 로드되기 시작한 시점부터 페이지의 콘텐츠의 일부가 렌더링될 때까지 걸린 시간
        -   전체 콘텐츠가 로딩되지 않아도 사용자는 소비할 수 있는 콘텐츠를 보게 되며, 로딩이 진행되고 있음을 인지하도록 한다.
        !https://images.velog.io/images/bumsu0211/post/78efbc20-ba56-45d9-96ab-998167d830bd/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-09-05_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_8.08.29.png
        -   1.8초 이내에 FCP가 수행되어야 좋은 점수를 받을 수 있다.
        -   3초 이상 FCP에 소요되면 개선이 필요하다. 사용자가 3초동안 아무런 화면도 볼 수 없는 상태이다.
        **웹 폰트와 FCP**
        보통 렌더링되는 첫 요소는 텍스트일 확률이 크다. 이미지나 비디오는 다운로드 시간이 별도로 존재하기 때문에 텍스트가 먼저 보이게 되는데, 폰트 설정을 어떻게 하냐에 따라 FCP 시간에 영향이 갈 수 있다.
        !https://images.velog.io/images/bumsu0211/post/2d7055b9-05aa-4b4f-900c-5662ae2da466/Untitled%2013.png
        각각의 폰트 역시 하나의 모듈이므로 다운로드 시간을 거친다. 만약 폰트 파일의 파일 용량이 크면 다운로드 시간이 길어질 것이고 사용자가 폰트가 적용된 텍스트를 보기까지의 시간이 더 걸리게 된다.
        또 다른 최적화 방법으로는 폰트 파일이 다운로드되기 전에 사용자에게 텍스트를 보여주는 방법이다. 브라우저가 가지고 있는 기본 폰트를 사용하여 우선적으로 화면에 텍스트를 띄우고, 폰트 파일이 다운로드 완료되면 그때서야 지정된 폰트를 적용한다.
    -   2. TTI (Time to Interactive)
        !https://images.velog.io/images/bumsu0211/post/3d504aba-43a0-41fb-a06a-5215a8125f54/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-09-05_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_8.37.00.png
        -   페이지가 완전히 상호작용할 준비를 마치기까지 걸린 시간
        -   Idle Window 시간 이내에 있는 Last Long-Task가 끝나는 시간을 측정한다.
            -   Idle Window = CPU Idle & Network Idle
                -   CPU Idle = 메인 스레드에 작업이 없는 짧은 기간
                -   Network Idle = 2개 이하의 네트워크 요청이 존재하는 기간
        -   웹에서의 상호작용은 자바스크립트를 통해 이뤄지므로, Last Long-Task가 끝이 나면 상호작용 준비가 되었다고 간주한다.
        !https://images.velog.io/images/bumsu0211/post/845c21e6-4d7c-4f90-bbf8-58a13895bfe9/Untitled%2018.png
        -   3.8초 이내에 상호작용 준비가 되면, 사용자가 이벤트를 발생시켜도 정상 동작하므로 경험을 해치지 않는다.
        -   7.3초 이상으로 상호작용 준비를 한다면, 그 사이에 사용자가 버튼을 클릭해도 아무런 반응이 없을 수 있다. 따라서 개선이 필요하다.
    -   3. TBT (Total Blocking Time)
        -   메인 쓰레드가 차단된 시간의 총합
        -   FCP와 TTI 사이에서 메인 쓰레드가 얼마나 차단되었는지 측정
        !https://images.velog.io/images/bumsu0211/post/2c76c267-8834-4c33-a67f-8b834ffb8a34/Untitled%2019.png
        !https://images.velog.io/images/bumsu0211/post/aab1fd35-22b4-44ee-b795-424cbe353d9f/Untitled%2020.png
        -   50ms 넘게 메인 쓰레드를 차지하는 작업을 Long-Task로 간주하며, Long-Task의 작업 시간에서 50ms를 뺀 시간들의 총합이 TBT이다.
        !https://images.velog.io/images/bumsu0211/post/c1b99f04-05d4-46d9-93bf-a90537510c9a/Untitled%2021.png
        **TTI 와의 관계**
        -   TTI 만으로 측정 불가한 영역을 TBT가 채워주는 상호보완적인 측정지표이다.
        1. 51ms 인 작업 3개가 10초에 걸쳐 진행되는 상황
        2. 10초짜리 작업 1개를 수행하는 상황
        -   위 2가지 작업은 모두 TTI 가 10초이다. Last Long-Task가 모두 10초지점에 끝나기 때문이다.
        -   그러나 TBT는 1번의 경우 3ms, 2번의 경우 9950ms이다. 즉, 9950ms동안 메인 쓰레드를 어떤 작업이 차지하고 있기 때문에 사용자와의 상호작용이 그만큼 지연된다.
        !https://images.velog.io/images/bumsu0211/post/e113665b-ac7f-4719-9e3e-1b9f93b7ce7c/Untitled%2022.png
        -   200ms 이내가 되도록 해야 사용자의 이벤트가 지연이 없거나 알아채지 못할 정도로만 지연된다.
        -   600ms 이상 메인 쓰레드가 차단되면, 사용자는 상호작용이 지연되는 느낌을 받을 수 있다.
    -   4. SI (Speed Index)
        !https://images.velog.io/images/bumsu0211/post/ed7d0aa1-ffdf-489a-a777-ce7bf0eafcca/Untitled%2023.png
        -   페이지의 콘텐츠가 채워지는 속도
        -   성능 측정 툴은 페이지가 로드되는 과정을 프레임 단위로 캡쳐하고 시각적인 변화를 계산한다.
        -   시각적 변화가 안정되는 시점까지 걸린 시간을 측정한다.
        !https://images.velog.io/images/bumsu0211/post/bb0ed895-de56-4f93-a758-e5a812037cb6/Untitled%2024.png
        -   3.4초 이내에 페이지에 콘텐츠를 다 채우면, 사용자에게 빠르게 로딩되는 인상을 준다.
        -   5.8초 이상으로 페이지가 그려진다면, 사용자에게 느리게 로딩되는 인상을 준다.
    -   5. LCP (Largest Contentful Paint)
        !https://images.velog.io/images/bumsu0211/post/1a44c37c-843d-446c-ae77-296f8d4c8529/Untitled%2025.png
        !https://images.velog.io/images/bumsu0211/post/3ddeffa3-617d-4123-b9c6-811755d76be3/Untitled%2026.png
        -   페이지 로드 시점부터 첫 화면 영역 내의 가장 큰 이미지나 텍스트 블록이 렌더링될 때까지의 시간
        -   페이지 로딩 스냅샷마다 화면 영역에서 가장 큰 블록을 찾아서 LCP의 시점을 조정한다.
        !https://images.velog.io/images/bumsu0211/post/f895c38a-a442-4dd7-8a41-3ec1447e31e9/Untitled%2027.png
        !https://images.velog.io/images/bumsu0211/post/89c55668-edc8-486d-be40-db888e0b9ce6/Untitled%2028.png
        -   LCP가 항상 페이지 로딩 완료를 뜻하지는 않는다. 페이지 로딩 완료는 SI 에서 측정한다.
        **왜 LCP를 측정할까?**
        -   페이지에서 가장 중요한 요소를 사용자에게 빠르게 전달해야 좋은 사용자 경험을 만들 수 있다.
        -   따라서 가장 중요한 요소가 페이지에 렌더링된 시점을 측정할 수 있어야 하고, 가장 중요한 요소를 알고 있어여 한다.
        -   FMP (First Meaningful Paint) 이라는 지표는 스크롤 없이 보여지는 화면 영역이 렌더링되는 시점으로, 이를 가장 중요한 요소가 표시되는 시점으로 간주했었으나 현재는 사용하지 않는다.
        -   구글의 연구 결과로는 주요 콘텐츠 렌더링 시점보다 가장 큰 요소의 렌더링이 사용자 경험에 더 좋았고, 이로 인해 LCP를 측정하게 되었다.
        !https://images.velog.io/images/bumsu0211/post/904bd3fd-891e-4d8f-9b52-3aed0f411034/Untitled%2029.png
        -   2.5초 이내에 가장 큰 요소가 그려지도록 한다.
        -   4초 이상 LCP가 소요되면 개선이 필요하다.
    -   6. CLS (Cumulative Layout Shift)
        -   페이지의 수명 동안 발생하는 모든 예기치 않은 레이아웃 변화에 점수를 매겨서 측정
        -   페이지가 로딩되어 콘텐츠를 소비하는 중간에 광고 배너, API 호출 후 만들어진 DOM, 나중에 로드된 이미지 등이 공간을 차지하여 텍스트가 밀리거나, 레이아웃이 변경되는 것들이 좋지 않은 사용자 경험을 유발한다.
        -   따라서 CLS 지표를 두어 페이지 스냅샷마다 레이아웃이 얼마나 변경되었는지를 측정한다.
        !https://images.velog.io/images/bumsu0211/post/29aff519-4407-48b2-8332-47aaf20a944a/Untitled%2030.png
        -   뷰포트의 75%를 차지하는 텍스트 박스가 뷰포트의 25% 아래로 이동하게 된 상태
        -   `0.75 * 0.25 = 0.1875` 의 점수가 누적된다.
        !https://images.velog.io/images/bumsu0211/post/a0e1b213-dd42-43a3-b59e-45d454ff83fe/Untitled%2031.png
        -   **0.1** 이내로 CLS를 유지하면 사용자가 보고 있던 요소가 시야를 벗어나지 않는다.
        -   **0.25** 이상이면 광고 배너나 이미지의 위치를 대략적으로 설정하고 공간을 미리 차지하는 등의 개선이 필요하다.
