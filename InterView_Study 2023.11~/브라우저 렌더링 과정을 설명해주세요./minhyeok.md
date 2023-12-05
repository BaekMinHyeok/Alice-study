# 브라우저 렌더링 과정을 설명해주세요.

-   HTML 파일과 CSS 파일을 파싱해서 각각 Tree를 만든다. (Parsing)
-   DOM Tree와 CSSOM Tree를 결합하여 Rendering Tree를 만든다. (Style)
-   Rendering Tree에서 각 노드의 위치와 크기를 계산한다. (Layout)
-   계산된 값을 이용해 각 노드를 화면상의 실제 픽셀로 변환하고, 레이어를 만든다. (Paint)
-   레이어를 합성하여 실제 화면에 나타낸다. (Composite)
