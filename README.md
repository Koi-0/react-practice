### 2024 파리 올림픽 메달 추적기

이 프로젝트는 2024 파리 올림픽에 참가한 국가들의 금, 은, 동메달 정보를 관리할 수 있는 웹 애플리케이션입니다. 사용자는 국가별 메달 수를 추가하고, 업데이트하며, 삭제할 수 있는 기능을 제공하며, 이를 통해 올림픽 메달 정보를 추적할 수 있습니다.

### 주요 기능

1. **국가 추가** : 사용자는 국가명과 금, 은, 동메달 수를 입력하여 새로운 국가를 추가할 수 있습니다.

    - 이미 존재하는 국가를 추가하려고 하면, 중복 국가 경고 메시지가 표시됩니다.
    - 만약 입력 필드를 비워두면 경고 메시지가 표시됩니다.

2. **국가 정보 업데이트** : 사용자가 이미 추가된 국가의 메달 수를 수정할 수 있습니다.

    - 업데이트 버튼을 클릭하면, 기존 국가를 찾아 금, 은, 동메달 수를 업데이트합니다.
    - 만약 국가명이 입력되지 않았거나, 메달의 갯수가 0일 경우 경고 메시지가 표시됩니다.

3. **국가 삭제** : 사용자는 국가를 삭제할 수 있습니다.

    - 삭제 버튼을 클릭하면, 삭제된 국가에 대한 알림을 표시합니다.

4. **입력 필드 초기화** : 국가 추가나 업데이트 후 입력 필드가 초기화되어 사용자 편의성을 높입니다.

### 기술 스택

-   **React**: UI 컴포넌트 및 상태 관리
-   **JavaScript (ES6)**: 기능 구현
-   **CSS**: 애플리케이션 스타일링
