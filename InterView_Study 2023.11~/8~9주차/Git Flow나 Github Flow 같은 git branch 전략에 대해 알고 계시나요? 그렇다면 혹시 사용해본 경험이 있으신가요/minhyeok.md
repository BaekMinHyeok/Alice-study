-   Git Flow나 Github Flow 같은 git branch 전략에 대해 알고 계시나요? 그렇다면 혹시 사용해본 경험이 있으신가요? (선택사항 : 그림을 그리면서 설명해 주셔도 됩니다)
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/976b641b-2e6b-431e-9b42-97c07d7d244f/bfcf56d0-ff17-4571-8e87-a822d22ca197/Untitled.png)
    브랜치 종류
    1. `master`: 제품 출시 버전을 관리하는 메인 브랜치
    2. `develop`: 다음 출시 버전을 위해 개발하는 브랜치
    3. `feature`: 새로운 기능을 개발하는 브랜치
    4. `release`: 다음 출시 버전을 준비하는 브랜치
    5. `hotfix`: 출시된 제품의 버그를 고치기 위한 브랜치
    6. **Git Flow:**
        - Git Flow는 Vincent Driessen이 제안한 모델로, 주로 큰 프로젝트나 업무 환경에서 사용됩니다.
        - 주요 브랜치로는 `master`, `develop`, `feature`, `release`, `hotfix` 등이 있습니다.
        - 새로운 기능은 `feature` 브랜치에서 개발되며, 완료되면 `develop` 브랜치로 병합됩니다.
        - 정기적인 배포를 위해 `release` 브랜치에서 준비하고 `master`로 병합됩니다.
    7. **GitHub Flow:**
        - GitHub Flow는 머지 기반의 단순한 워크플로우를 제안하는 모델로, 빠르고 유연한 피드백을 강조합니다.
        - 기능 개발은 새로운 브랜치에서 시작되고, 완료되면 `main` 브랜치로 풀 리퀘스트를 생성하여 머지됩니다.
