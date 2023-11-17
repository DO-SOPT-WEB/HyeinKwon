🖤 API 통신에 대하여

로딩 / 에러 처리를 하는 방법에는 어떤 것들이 있을까?

1. custom hook 추가
2. 리액트 쿼리
3. fetch에 로딩을 추가한 후, state로 관리 + error 구문 elert 등으로 구현
4. 선언적 처리 : suspense, errorBoundary

패칭 라이브러리란 무엇이고 어떤 것들이 있을까?

1. react-query
   ` const result = useQuery(`/user/${id}`, fetcher, options);`
   첫번째 인자: unique한 key값 무슨 값이든 가능
   두번째 인자: fetch함수

2. SWR
   -> `  const { data, error } = useSWR("/api/user", fetcher, options);`
   첫번째 인자: key값(string 또는 함수를 사용)
   두번째 인자: fetcher 함수 + key값이 첫번째 파라미터로 전달,
   세번째 인자: options: 다시 연결되었을 때 refetch

https://fe-developers.kakaoent.com/2022/220224-data-fetching-libs/
패칭 라이브러리를 쓰는 이유는 무엇일까?

1. 언제 데이터를 어떻게 fetch하는지 목표만 기술하면 된다.
2. 동일한 api 요청이 여러번 호출될 경우 한번만 실행될 수 있다.
3. 자연스러운 흐름 파악이 가능하다.
