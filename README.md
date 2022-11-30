# react-to-do-list


📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂component
 ┃ ┣ 📜Card.tsx
 ┃ ┗ 📜TodoHeader.tsx
 ┣ 📂pages
 ┃ ┗ 📜TodoList.tsx
 ┣ 📂store
 ┃ ┗ 📜todo.ts
 ┣ 📂types
 ┃ ┗ 📜todo.ts
 ┣ 📜.DS_Store
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
 

1.  신규 프로젝트를 진행할 때는 번들러를 Webpack 대신 HMR이 빠른 Vite를 선호합니다. 따라서 번들 툴은 Vite를 사용했고, CORS 오류 등을 고려할 필요 없는 Only front 환경이라 딱히 프록시 등의 번들러 설정을 건드리진 않았습니다.
2.  Typescript 적용, CRUD의 UD 부분에는 사실 제네릭을 사용해서 최대한 함수형 프로그래밍을 적용하고 싶었는데 (특히 DEL은 Omit을 사용해서 delete 힌다~ 를 표현할 수 있지 않았을까?) 시간 관계상 새로운 배열을 하나 만들어서 기존 배열과 교체하는 식으로 진행했습니다. 지금이야 간단해서 괜찮지만 차후 대량의 데이터를 핸들링해야 할 때는 성능 이슈를 무조건 느낄 것 같아서 아쉽네요.
3.  CSS-IN-JS 채용. 얼마 전에 css-in-js 방식에서 벗어나라는 아티클을 봐서 약간 양심에 찔렸지만, 이 방식이 유지, 보수가 너무너무 편해서 벗어날 수가 업습니다.
4.  상태 관리로는 jotai 적용! 사실 Recoil, Zustand 같은 핫한 툴들이 나오면서 상태 관리 라이브러리들 선택지가 무지 넒어졌는데 (redux 무지 싫어함), 저는 거의 jotai의 열렬한 신봉자 수준이라 이번에도 jotai를 채용했습니다. 한가지 아쉬운 건, 이 강력한 jotai는 네트워크와의 소통이 있을 때 더 빛을 발하는데 아쉽게도 front only라.......
5.  그 외 좀 더 단위를 쪼개서 컴포넌트 관리를 할 수 있지 않았을까, 라는 아쉬움이 있습니다.
