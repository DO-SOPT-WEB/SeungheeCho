### 🐵 로딩, 에러 처리를 하는 방법

- 로딩과 에러를 처리해야 하는 이유는 뭘까?
  - 데이터 페칭에 문제가 생길 경우, 에러 발생 없이 데이터 페칭이 잘못되었다는 것을 **애플리케이션을 멈추지 않고** 알려야 하기 때문이다.
  - 또 데이터를 가져오는 중인 로딩 상태를 처리하여 로딩 페이지를 띄우는 등 **사용자 경험을 향상**시키는 데에 활용할 수 있다.
- React Query를 활용하여 로딩, 에러처리 하기

  - 리액트 쿼리가 제공하는 속성 중 로딩과 에러 상태를 처리해주는 `isLoading`, `isError` 를 활용할 수 있다.
    ```jsx
    const {data, isLoading, isError} = useQuery(...);
    if(isLoading) return <div>로딩 화면</div>
    if(isError) return <div>오류 화면</div>
    ```

- React에서의 에러 핸들링
  - 보통 api 호출엔 `try ~ catch`문을 통해 에러를 처리한다.
    그러나 이러한 방식은 하나의 컴포넌트 안에 에러가 발생했을 경우와 아닌 경우의 코드를 각각 작성하기 때문에 가독성이 떨어진다.
  - **ErrorBoundary**
    - React 16 버전부터 개념 도입
    - ErrorBoundary 컴포넌트 형태
      ```jsx
      class ErrorBoundary extends React.Component {
        constructor(props) {
          super(props);
          // 컴포넌트의 초기 상태 설정
          this.state = { hasError: false };
        }

        // 에러가 발생했을 때 호출되는 메서드
        static getDerivedStateFromError(error) {
          // 상태를 업데이트하여 에러 발생 여부를 표시
          return { hasError: true };
        }

        // componentDidCatch()는 에러가 발생한 후 호출되는 메서드
        componentDidCatch(error, errorInfo) {
          // 에러 정보와 함께 서비스에 에러 로그를 기록하는 함수 호출
          logErrorToMyService(error, errorInfo);
        }

        render() {
          // 에러가 발생한 경우 에러 메시지를 표시
          if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
          }

          // 아니면 자식 컴포넌트를 렌더링
          return this.props.children;
        }
      }
      출처: https://lasbe.tistory.com/183 [LasBe's Upgrade:티스토리]
      ```
    - `getDerivedStateFromError(error)`
      - 하위 컴포넌트에서 발생한 에러를 상위 컴포넌트가 감지
      - 에러 발생 여부를 컴포넌트 상태에 반영하여 업데이트 (`hasError`)
    - 상위에서 에러 핸들링을 선언하여 하위컴포넌트에 전달하면, 하위 컴포넌트에서는 에러 처리를 별도로 다루지 않아도 된다.

## 🐵 Data Fetching Library

기존의 Client State 관리는

- Redux
- React Context API
- Recoil

등의 라이브러리를 통해 관리한다.

<br/>

Client에서 API와 통신을 하기 위해서는
추가적으로 **useEffect**, **useState**를 함께 쓰면서 데이터를 fetching 해왔다.

하지만 데이터 페칭 라이브러리를 사용하면 이러한 훅들의 필요성이 사라진다.

## 🐵 React Query

React에서 `데이터 fetching`과 `캐싱 프로세스`를 간소화해주는 **라이브러리**

- 외부(API 등)로부터 데이터를 fetching 및 업데이트 과정 간소화
- API 요청의 로딩 및 오류 상태 관리
- 캐싱 자동 관리

<br/>

## React Query 주요 개념

`Query`

- API 엔드포인트, DB 등의 원격 데이터 소스로부터 데이터 요청
- **useQuery** 훅 사용

`Mutation`

- 서버에 데이터를 추가하거나 업데이트
- **useMutation** 훅 사용

`Query Caching`

- Query 결과를 메모리에 저장
  `Query Invalidation`
- 쿼리를 오래된 상태로 여겨 무효화

<br/>

## 1️⃣ useQuery 훅

> 데이터 Fetching 용

API 엔드포인트나 DB에서 데이터를 **비동기적**으로 가져오도록 서버에 요청하는 것

<br/>

### **사용법**

```jsx
const query = useQuery( { queryKey: [ ‘key’ ],   queryFn: callback })

```

`queryKey`

- 쿼리의 **고유 키**
- React Query 최신 버전부터는 **배열 표기법**을 사용해서 키 지정

`queryFn`

- 훅 호출 시 실행되는 **Promise 반환하는 함수**
- 해당 callback함수에서 데이터 fetching

```jsx
// 예시
const getProducts = () => fetch( '<https://jsonplaceholder.typicode.com/users>')
                          .then( res  => res.json() )

const query = useQuery( { queryKey: [‘users’],   queryFn: getTodos })

```

`반환값` 쿼리의 상태 정보를 담고 있는 **객체**

```jsx

const { isLoading, isError, data, error, refetch, remove } = useQuery( { queryKey: [‘todos’], queryFn: getTodos });

```

대표적인 **프로퍼티**

- `isLoading` 쿼리가 현재 로딩 중인지 여부 (boolean)
- `isError` 쿼리 결과가 오류인지 여부 (boolean)
- `data` 쿼리를 통해 성공적으로 fetching된 데이터
- `error` 쿼리 실행 중 발생한 모든 에러
- `refetch` 쿼리 데이터를 수동으로 refetch 하는 트리거 **메소드**
- `remove` 캐시에서 특정 쿼리 제거하는 **메소드**

<br/>

### 데이터 refetching

`useQuery`는 기본적으로

- **컴포넌트 최초 mount 시**에 데이터를 fetching해오고,
- 이후의 데이터 업데이트에 대해서는 **자동 실행되지 않는다. (데이터 refetching 안해줌)**

<br/>

**[ useQuery 옵션 ]**

| 옵션                 | 역할                                                         | 기본값 |
| -------------------- | ------------------------------------------------------------ | ------ |
| refetchOnWindowFocus | 데이터가 오래된(stale) 경우 브라우저 창이 포커스 되면 리페치 | true   |
| refetchOnMount       | 데이터가 오래된 경우 마운트 시 리페치                        | true   |
| refetchOnReconnect   | 데이터가 오래된 경우 재연결 시 리페치                        | true   |

하지만 브라우저가 **idle** 상태를 유지할 때엔, 데이터 업데이트를 감지하여 자동으로 리페치해주지 않는다.

이를 보완하기 위해서 `refetchIntervel` 옵션을 사용할 수 있다.

- 설정한 밀리초 단위로 데이터를 계속 refetching 해옴

<br/>

## 2️⃣ useMutation 훅

API 엔드포인트나 DB에 데이터를 새로 생성, 수정, 삭제

### 사용법

```jsx
const mutation = useMutation({ mutationFn: mutationFunction });
```

`mutationFn`

- 필수 옵션.
- 실행하고자 하는 함수를 **반환**하는 함수
- 예시
  ```jsx
  const AddUser = useMutation({
      mutationFn: ( user ) => {

        return fetch('<https://jsonplaceholder.typicode.com/users>',
        {
          method:'post',
          headers: {
             "Content-Type": "application/json",
        },
        body:JSON.stringify( user )
      }).then( res =>  res.json() )
    })

  ```

<br/>

`반환값` 뮤테이션 실행 결과와 관련된 정보를 담은 **객체**

대표적인 **프로퍼티**

- `isLoading` 뮤테이션이 현재 로딩 중인지 여부 (boolean)
- `isSuccess` 뮤테이션 결과가 성공인지 여부 (boolean)
- `isError` 뮤테이션 결과가 오류인지 여부 (boolean)
- `data` 뮤테이션 실행 후 반환된 데이터 (있을 때만)
- `mutate` 해당 뮤테이션 실행을 위해 호출할 **메소드**. (인자에 담을 변수를 객체로 전달)
- `reset` 뮤테이션 초기 상태로 리셋하는 **메소드**
- `onSuccess` 뮤테이션 성공시 호출할 콜백함수
- `onError` 뮤테이션 실패시 호출할 콜백함수

<br/>

## 3️⃣ Query Caching

원격 서버와 통신하는데에 걸리는 시간을 단축하고자,

여러번 불러올 데이터는 캐시에 저장하여 반복해서 필요로 할 경우 원격 서버가 아닌 캐시에서 빠르게 가져올 수 있는 방식

useQuery 훅 사용 시, 지정했던 **`고유 키`** 밑에 **반환된 데이터가 캐싱**된다.

기본적으로는 캐시 데이터는 **오래된(stale) 상태**로 기록된다.

<br/>

**[ Query Caching과 관련된 useQuery 옵션 ]**

```jsx
const query = useQuery({
    queryKey: [‘users’],
    queryFn: getUsers,
    staleTime: 5000,
    cacheTime: 60000
  })

```

`staleTime`

- xx밀리초 후에 데이터는 **stale 상태**로 처리된다.
  `cacheTime`
- xx밀리초 후에 캐시 데이터는 **가비지 컬렉션**으로 간다. (버려짐)

<br/>

## 4️⃣ Query Invalidation

지정해준 `staleTime` 과 무관하게 즉시 데이터를 stale 상태로 처리해야하는 경우가 있다.

예를 들어, API에 POST 요청을 보내 데이터 값을 업데이트할 때엔, API 엔드포인트에 있는 데이터의 값이 캐시에 저장되어있는 값보다 더 최신 상태가 되고, 캐시에 저장되어있는 데이터는 곧바로 outdated한 값이 되어버린다. 이럴 때엔 즉시 캐시 데이터를 stale 상태로 처리해줘야 한다.

> React Query의 QueryClient 객체의 invalidateQueries 메소드 활용

- **모든 쿼리**, 혹은 고유 키를 통해 **특정 쿼리**를 stale 상태로 처리해주는 역할

<br/>

### 사용법

- `useQueryClient` 훅을 통해 **queryClient 객체** 생성
- 객체 내장 **메소드** `invalidateQueries` 활용하기

```jsx
import { useQueryClient } from "@tanstack/react-query";

// useQueryClient 훅을 사용하여 queryClient 객체 생성
const queryClient = useQueryClient();

// 캐시의 모든 쿼리 무효화
queryClient.invalidateQueries();

// 'users'로 시작하는 키가 있는 모든 쿼리 무효화
queryClient.invalidateQueries({ queryKey: ["users"] });
```

<br/>

---

### 🐵 패칭 라이브러리를 쓰는 이유는 무엇일까?

- React 훅을 사용해서 데이터를 간편하게 Fetch/Update 할 수 있다!
- 스마트 캐싱 메커니즘을 통해 성능을 최적화할 수 있다!!

정리하자면, **코드 간소화 & 성능 최적화**를 위해 Fetching Library를 사용할 수 있다
