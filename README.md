# What is NexJS? And Why?

[Next.js by Vercel - The React Framework](https://nextjs.org/)

- The React Framework for Production
- Framework
    - 대규모 리액트 프로젝트를 만들 수 있다.
    - Framework vs library
        
        [[개발상식] 프레임워크(Framework) 와 라이브러리(Library)의 차이](https://cocoon1787.tistory.com/745)
        
    - React library - 컴포넌트, satet, props등을 이용해 사용자 인터페이스 부분에만 초점을 맞추기 때문이다.
    
- NextJS solbs common problems and makes building React apps easier!
- react를 기반으로 하는 framework이며react 프로젝트에 많은 기능을 제공하기 때문에 생산을 위한 리액트 프레임워크이다.

<aside>
💡 The React Framework for Production

React - You still write React code, you still build React components and use React features (props, state, context …)

NextJS just enhances your React app and adds more features.

Framework - Lots of built-in features (e.g. routing) that help you solve common problems & clear guidance on how to use those featuers.

Production - There are certain problems which you will need to solve for almost all production-ready React apps: NextJS solves those for you.

</aside>

NextJS - Key Features & Benefits

- Server-side Rendering
    - React는 CSR으로 모든 렌더링이 클라이언트 쪽에서 일어난다.
    - 실제로 개발자 도구를 통해 웹페이지 정보를 확인하면 기본적인 html뼈대 이외에는 meta 태그 등을 확인할 수 없는 것을 알 수 있다.
    - 사용자의 입장에서 처음 리액트 프로젝트 웹 페이지에 진입하면 data fetching이 일어나는 경우 fetching하는 동안 컨텐츠 내용을 확인할 수 없다. 왜냐하면 client 측에서 자바스크립트 코드를 실행할 때 data fetching이 시작되기 때문이다. 따라서, 데이터 응답 전까지 사용자는 로딩 화면만 볼 수 있을 것이다.
    - 검색 엔진이 필요한 컨텐츠가 많이 있는 공개 페이지의 경우 검색 엔진 최적화가 중요하다. → 검색 엔진 크롤러가 비어있는 초기 html 파일의 컨텐츠를 바라보고 있기 때문이다.
    - SSR은 사용자와 검색 엔진 크롤러에게 준비된 html페이지를 보여준다.
    - NextJS에는 SSR이 내장되어 있다. 추가적인 설정없이 자동으로 페이지를 사전 렌더링하게 된다.
    - NextJS는 React 프로젝트의 코드와 장점을 가져가기 때문에 CSR와 SSR을 혼합하여 지원한다.
    
- File-based Routing
    - React에는 routing 기능을 제공하고 있지 않다.
    - Router는 실제로 여러 페이지에 접근하는 듯한 기능을 제공한다. (서버로 url을 전송하지 않고 client 단에서 컨텐츠 별로 렌더링) 또한, 보통 Router로 3개의 분기를 만든다면 3개의 page component를 만들어 각 path에 대응하도록 하여야 한다.
    - NextJS는 파일과 폴더를 이용해 페이지와 route를 정의한다. → 코드와 작업량을 줄일 수 있다.
- Fullstack Capabilites
    - NodeJS 코드를 통해 API를 쉽게 추가할 수 있다.
    - database 통신 및 인증 추가 등의 작업이 가능하다.

# File-basedRouting & Page Pre-rendering

# Data Fetching & Adding an API

- NextJS 프로젝트 시작
    
    [Getting Started | Next.js](https://nextjs.org/docs/getting-started)
    
- 실습 프로젝트 컴포넌트 구조
    
    <aside>
    💡 1. 각 라우팅 페이지
    2. 라우팅 페이지가 갖는 컴포넌트
    3. 공통 컴포넌트 (Card, Layout…)
    
    공통 컴포넌트
    - Card 컴포넌트 - 컴포넌트 컨텐츠를 감싼다.
    - Layout 컴포넌트 - 전체 컴포넌트를 감싼다.
    - MainNavigation 컴포넌트 - Layout 컴포넌트 이하에 위치
    
    메인 페이지
    - 모임 리스트 컴포넌트
      - 모임 아이템 컴포넌트 (리스트 별)
    
    작성 페이지
    - 모임 작성 폼 컴포넌트
    
    상세 페이지
    - 모임 상세 컴포넌트
    
    </aside>
    
- 폴더 구조
    
    <aside>
    💡 public 에 index.html 파일이 존재하지 않음
    → SSR
    
    pages 이하에서 파일 기반 라우팅을 이룬다.
    
    </aside>
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/286f76dc-b658-4075-b449-7e341dfc60fb/Untitled.png)
    
- 파일 기반 라우팅 시작하기1
    
    <aside>
    💡 1. 컴포넌트 이름에 따라 도메인 뒤에 붙는 url이 달라진다. (파일 기반 라우팅)
    
    2. React와 마찬가지로 각 컴포넌트들은 JSX 코드를 반환한다.
    
    3. React와 달리 NextJS는 서버에서 페이지를 사전 렌더링한다.
    
    </aside>
    
    - pages 디렉토리 이하에 컴포넌트 생성
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ca882fa8-46d5-483b-8731-d066976e7eb2/Untitled.png)
    
    ```jsx
    // index.js
    // our-domain.com/
    // 컴포넌트 이름은 자유
    
    function HomePage() {
      return <h1>The Home Page</h1>;
    }
    
    export default HomePage;
    ```
    
    ```jsx
    // news page
    // our-domain.com/news
    
    function NewsPage() {
      return <h1>The News Page</h1>;
    }
    
    export default NewsPage;
    ```
    
    - SSR
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a18548e3-524b-4a5a-a99a-84a2518240ec/Untitled.png)
    
    - CSR
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8eb92cfa-3415-460d-9238-95ee60869a27/Untitled.png)
    
- 파일 기반 라우팅 시작하기2 - 중첩 라우팅
    
    <aside>
    💡 도메인/ → index.js
    도메인/news/ → news/index.js
    도메인/news/test ⇒ news/test.js
    
    만약 news/test → index.js 컴포넌트를 생성한다면. new/ 이하의 test.js 컴포넌트가 실행된다.
    
    </aside>
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5f53f8c0-b116-4821-9700-071737cca5ce/Untitled.png)
    
- 파일 기반 라우팅 시작하기3 - 동적 라우팅
    
    <aside>
    💡 []대괄호를 통해 동적 라우팅 파일을 생성할 수 있다.
    
    </aside>
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0a4ebd67-5f55-46f6-ac5b-e7e9e7c6e0b3/Untitled.png)
    
    ```jsx
    // detail page
    // our-domain.com/news/여러 식별자
    
    function DetailPage() {
      return <h1>The Detail Page</h1>;
    }
    
    export default DetailPage;
    ```
    
    동적 데이터 가져오기
    
    <aside>
    💡 동적 라우팅 파일의 식별자를 통해 값을 가져올 수 있다.
    
    </aside>
    
    ```jsx
    // 리액트 함수형 컴포넌트에서 사용 가능
    import { useRouter } from "next/router";
    
    function DetailPage() {
      const router = useRouter();
      const newsId = router.query.newsId;
    
      // send a request to the backend API
      // to fetch the news item with newId
    
      return <h1>The Detail Page</h1>;
    }
    
    export default DetailPage;
    ```
    
    <aside>
    💡 link 태그를 통해 /news/anything 링크를 클릭하면 새로고침하며 화면이 전환된다. (새로운 페이지를 불러들이기 때문에)
    
    이는 리액트의 장점인 SPA이 아니라는 의미이다.
    
    nextJS에서 제공하는 Link 컴포넌트를 통해 SPA를 유지할 수 있다.
    
    </aside>
    
    ```jsx
    // /news/index.js
    
    import Link from "next/link";
    import { Fragment } from "react";
    
    function NewsPage() {
      return (
        <Fragment>
          <h1>The News Page</h1>
          <ul>
            <li>
              <Link href="/news/nextJS">NextJS</Link>
            </li>
          </ul>
        </Fragment>
      );
    }
    
    export default NewsPage;
    ```
    
    <aside>
    💡 동적 라우팅을 할 때에도 폴더 명을 동적 라우팅하는 파일의 이름으로 변경할 수 있다.
    
    </aside>
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af8bfd6f-c0f2-4330-8159-6f569ecfafdf/Untitled.png)
    
- 모든 컴포넌트에 공통 컴포넌트 혹은 공통 설정 적용하기
    
    <aside>
    💡 _app.js는 모든 컴포넌트의 최상위 컴포넌트이다.
    
    _app.js에 작업을 하게 되면 번거롭게 모든 컴포넌트에 일일이 공통 컴포넌트 혹은 설정을 감싸줄 필요가 없어지게 된다.
    
    </aside>
    
    ```jsx
    // _app.js
    
    import "../styles/globals.css";
    import Layout from "../components/layout/Layout";
    
    function MyApp({ Component, pageProps }) {
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
    }
    
    export default MyApp;
    ```
    
    → Layout 컴포넌트가 모든 컴포넌트에 걸쳐 적용되는 것을 확인할 수 있다.
    
- 탐색 방식을 통한 상세 페이지 연결하기
    
    <aside>
    💡 상세 페이지 이동을 할 때 단순히 nextJS의 Link 컴포넌트를 사용할 수 있지만 프로그래밍 방식으로 탐색하는 것이 더욱 효율적이다.
    
    </aside>
    
    ```jsx
    import { useRouter } from "next/router";
    
    function MeetupItem(props) {
      const router = useRouter();
    
      const navigatePageHandler = () => {
        router.push(`/${props.id}`);
      };
    
      return (
        ...
    
        <button onClick={navigatePageHandler}>Show Details</button>
    
    		...
    }
    
    export default MeetupItem;
    ```
    
- NextJS styling
    - React와 마찬가지로 컴포넌트.module.css 파일로 컴포넌트와 연결할 수 있다.
    
    ```jsx
    // MeetupDetail.js
    
    import Card from "../ui/Card";
    import classes from "./MeetupDetail.module.css";
    
    const MeetupDetail = (props) => {
      return (
        <section className={classes.detail}>
          <Card>
            <img src={props.img} alt={props.title} />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </Card>
        </section>
      );
    };
    
    export default MeetupDetail;
    ```
    
    ```css
    // MeetupDetail.module.css
    
    .detail {
      text-align: center;
    }
    
    .detail img {
      width: 100%;
      overflow: hidden;
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;
    }
    ```
    
- 사전 렌더링 작동 방식 및 필요성
    
    <aside>
    💡 React 프로젝트에서 사용자가 페이지에 접근할 때 useEffect 훅을 통해 서버로 부터 데이터를 요청한다. 데이터가 fetching되었다면 useState 훅에 저장하여 받아온 데이터를 보여주는 프로세스를 가지고 있다.
    
    즉, 데이터 fetching 전, 후 두번의 렌더링 사이클을 진행하게 된다. 이는 사용자에게 로딩 화면을 제공하며 검색 엔진 최적화 문제 발생하게 된다.
    
    NextJS의 사전 렌더링은 두번의 렌더링 사이클을 거치지 않고 항상 첫 번째 렌더링 사이클의 결과를 받아와 사전 렌더링한 HTML코드를 반환한다.
    
    - NextJS에 내장된 주요 기능을 통해 사전 렌더링된 html은 어떻게 반환되는 것일까?
    </aside>
    
- NextJS 사전 렌더링
    1. 정적 생성 (Static Generation) 
    - 사용자 요청 때마다 사전 렌더링 하는 것이 아닌 빌드 단계에서 페이지를 설정하는 방법
    
    ```jsx
    const DUMMY_MEETUPS = [
      ...
    ];
    
    const HomePage = (props) => {
      return <MeetupList meetups={props.meetups} />;
    };
    
    // Promise 반환 가능
    // NextJS는 데이터를 받아올 때까지 대기한다.
    // build 단계에서 실행되는 함수이기 때문에 client, server 단에서 실행될 수 없다.
    export async function getStaticProps() {
      // fetch data from an API
    
      // props라는 key값을 가진 객체를 반환해야만 한다.
      return {
        props: {
          meetups: DUMMY_MEETUPS,
        },
      };
    }
    
    export default HomePage;
    ```
    
    ### 문제점
    
    <aside>
    💡 getStaticProps함수로부터 useState, useEffect hook을 사용하지 않고 데이터(database, api로 받아온)를 뿌려줄 수 있다.
    
    하지만 문제점도 분명 존재한다.
    
    이후 데이터를 변경(추가, 수정, 삭제)했을 때 정적 페이지는 그 사실을 알 수 없다. 오로지 빌드 시점의 데이터로 정적 페이지를 생성하기 때문이다.
    
    </aside>
    
    ```jsx
    // 위의 문제에 당착했을 때 
    
    export async function getStaticProps() {
      // fetch data from an API
    
      return {
        props: {
          meetups: DUMMY_MEETUPS,
        },
    		// 선언한 숫자(초 단위) 간격으로 페이지를 생성한다. 
        // 오래된 사전 렌더링 페이지를 교체한다.
    		// 업데이트가 빈번하다면 1초 마다
    		// 입데이트가 빈번하지 않다면 3600초 (1시간) 마다
    		// 프로젝트 용도에 따라 적절하게 적용한다.
    		revalidate: 1,
      };
    }
    ```
    
    ### 빌드
    
    <aside>
    💡 npm run build 명령어를 통해 빌드 된 페이지의 상태를 확인할 수 있다.
    
    루트 폴더만 Static Site Generation된 것을 알 수 있다. (DUMMY_DATA를 getStaticProps 함수로 정적 생성)
    
    static은 빈 원 모양으로 초기 props를 사용하지 않는다고 명시되어 있다.
    
    /new-meetup과 /404 페이지는 초기 데이터와 연관없는 페이지이다. 하지만 /[meetupId]는 상세 페이지이므로 SSG 처리를 해주어야 한다.
    
    </aside>
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da331318-3358-4ffb-9123-a6706d73e95d/Untitled.png)
    
    ### 사용자 요청 때마다 SSG 파일 만들기
    
    ```jsx
    // 요청이 들어오기 전까지 페이지가 만들어지기까지 대기해야하는 단점.
    export async function getServerSideProps(context) {
    	
    	// 인증작업, 세션 확인 등에 사용한다.
    	const req = context.req;
      const res = context.res;
    
      // fetch data from an API
    
      return {
        props: {
          meetups: DUMMY_MEETUPS,
        },
      };
    }
    ```
    
    <aside>
    💡 getServerSideProps 함수는 사용자의 요청이 들어올 때마다 페이지를 새로 생성한다. 
    
    getStaticProps는 단순 html 파일을 정적 생성하므로 인증과 같은 기능과는 적합하지 않다.
    
    두 함수의 장단점을 파악하고 사용하도록 하자.
    
    </aside>
    
- NextJS 동적 라우팅
    
    ### 동적 페이지 사전 렌더링 적용
    
    <aside>
    💡 앞서 SSG, SSR을 적용하는 함수 getStaticProps, getServerSodeProps 2개를 살펴보았다.
    
    동적페이지를 적용하려면 getStaticPaths 함수를 더 알아야 한다.
    
    먼저, 상세 페이지의 사전 생성 페이지를 만드는 경우를 생각해보자. 
    
    SSG의 경우에 빌드 단계에서 사전 생성 페이지를 만들게 되는데 [meetupId].js 폴더 라우팅을 생각해본다면 사용자가 어떤 meetupId를 url에 입력해 들어올지 알 수 없다.
    
    개발자가 특정 meetupId로 들어올지 예상해서 사전 생성 페이지를 만든다면 예외의 meetupId로 url을 입력했을 경우 404에러가 발생할 것이다.
    
    즉, 빌드 단계에서 동적 라우팅 페이지에 대응되는 사전 생성 페이지가 필요한 것이다.
    
    </aside>
    
    ```jsx
    // fallback: false -> paths에 선언한 meetupId 값에 대응하는 페이지만 생성하라.
    // meetupId: 0, meetupId: 1을 제외한 나머지 meetupId 값이면 404 에러 발생
    
    // fallback: true -> meetupId에 대응하는 페이지를 동적으로 생성한다.
    
    export async function getStaticPaths() {
      return {
        fallback: false,
        paths: [
          {
            params: {
              meetupId: "0",
            },
          },
          {
            params: {
              meetupId: "1",
            },
          },
        ],
      };
    }
    
    export async function getStaticProps(context) {
      console.log(context);
    
      return {
        props: {
          meetup: {
            img: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg",
            title: "고양이 모임",
            address: "경기도 고양시",
            description: "고양이 모임입니다.",
          },
        },
      };
    }
    ```
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bf28197e-709f-4269-bfd9-dfdf36107974/Untitled.png)
    
    <aside>
    💡 이제 [http://localhost:3000/0](http://localhost:3000/0) 와 [http://localhost:3000/](http://localhost:3000/0)1 페이지에 정상적으로 접근할 수 있다. (getStaticPaths함수를 통해)
    
    위의 이미지는 [http://localhost:3000/0](http://localhost:3000/0)로 접속했을 때 개발자 터미널에서 확인할 수 있는데 getStaticProps 함수의 context를 콘솔로 찍은 것이다. meetupId값을 정상적으로 받아올 수 있는 것을 확인할 수 있다.
    
    앞서 언급했듯 브라우저의 개발자 도구 콘솔 창에서는 위의 콘솔이 찍히지 않는데 사전 생성 페이지는 빌드 단계에서 실행되는 코드이기 때문에 터미널에서만 확인할 수 있다.
    
    </aside>
    
    - 사전 렌더링 및 SSG VS SSR
        
        [Learn | Next.js](https://nextjs.org/learn/basics/data-fetching/pre-rendering)
        
        [](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths)
        
- DataBase 연동하기 (데이터 삽입)
    - 글 작성 시 통신할 api router 만들기
    
    ```jsx
    // pages/api/new-meetup.js
    
    // api router
    // 글 작성 시 DataBase에 연동하는 함수. (JSON 데이터를 받아 반환)
    // 오직 서버 단에서 처리되는 함수를 작성한다.
    // 컴포넌트로서 렌더링하지 않는다.
    // 엔드포인트 /api/new-meetup
    
    function addMeetupHandler(req, res) {
    
    	// req.method 어떤 요청이 들어왔는지
    	if (req.method === 'POST') {
    
    		// 요청의 body 단
    		const data = req.body;
    		const { title, image, address, description } = data;
    
    	}
    }
    
    export default addMeetupHandler;
    ```
    
    - mongoDB atlas 연동
    
    <aside>
    💡 1. cluster > 프로젝트 생성 후 연동 코드 확인
    2. npm install mongodb
    2-1. mongoDB의 데이터 crud를 돕는 라이브러리
    3. 생성한 api router에 코드 작성
    
    </aside>
    
    - 로컬 api
    
    ```jsx
    // pages/api/new-meetup.js
    
    import { MongoClient } from "mongodb";
    
    // 데이터 통신 예외 처리 필요
    function async addMeetupHandler(req, res) {
    
    ...
    
    		// user, password: 사용자 권한이 있는 계정
    		// database name: 통신할 데이터베이스 이름
    		const client = await MongoClient.connect(
    		    "mongodb+srv://<USER>:<PASSWORD>@cluster0.4hx7vyi.mongodb.net/<DATABASENAME>?retryWrites=true&w=majority"
    		);
    		
    		// 연결된 db 정보
    		const db = client.db();
    
    		// meetups collection과 연동
        const meetupsCollection = db.collection("meetups");
    
    		// 데이터 삽입
        const result = await meetupsCollection.insertOne(data);
    
        console.log(result);
    
    		// database 연동 종료
        client.close();
    
    		// 201(데이터 삽입 성공)일 때 메시지 생성 -> 커스터마이징 필요
        res.status(201).json({ message: "하나의 모임이 등록됨" });
    
    }
    ```
    
    - 글 작성 page 컴포넌트
    
    ```jsx
    // pages/new-meetup/index.js
    
    const NewMeetupPage = () => {
      const router = useRouter();
    
    	// 글 작성 시 실행되는 함수
      const addMeetupHandler = async (newMeetupData) => {
      
    	// 절대경로 api (로컬 api)  
    	const response = await fetch("/api/new-meetup", {
          method: "POST",
          body: JSON.stringify(newMeetupData),
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        const data = await response.json();
    
        console.log(data);
    
        // 뒤로가기 가능
        router.push("/");
    
        // 뒤로가기 불가능
        // router.replace("/");
      };
    
    ...
    ```
    
    - 정상적으로 데이터가 삽입되었음을 알 수 있다.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ec52db7c-45b0-4adf-972c-74b7f3dca8fa/Untitled.png)
    
- DataBase 연동하기 (데이터 전체 조회)
    
    <aside>
    💡 라우팅의 최상위 폴더인 index.js에서 DUMMY_DATA로부터 모임 정보를 가져오고 있다.
    
    getStaticProps 함수는 빌드 시에만 실행되는 함수로 클라이언트에 노출되지 않는 특징을 가지고 있다.
    
    따라서 데이터 삽입 때와 같이 따로 api를 만들 필요 없이 바로 함수 내부에서 DB 조회 코드를 작성하면 된다.
    
    또한, 패키지도 클라이언트 번들러에 포함되지 않는다.
    
    </aside>
    
    ```jsx
    
    // pages/index.js
    
    import { MongoClient } from "mongodb";
    
    export async function getStaticProps() {
    
      // fetch data from an API
      const client = await MongoClient.connect(
        "mongodb+srv://<USER>:<PASSWORD>@cluster0.4hx7vyi.mongodb.net/<DATABASENAME>?retryWrites=true&w=majority"
      );
    
      const db = client.db();
    
      const meetupsCollection = db.collection("meetups");
    
    	// 가져온 collection 정보를 배열화 해준다.
      const loadedData = await meetupsCollection.find().toArray();
    
      client.close();
    
      return {
        props: {
          meetups: loadedData.map((meetup) => ({
            title: meetup.title,
            image: meetup.image,
            address: meetup.address,
          })),
        },
        revalidate: 1,
      };
    }
    
    ```
    
    - 에러 조치
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6cce1446-1e39-41ac-b475-24e665c9f5e8/Untitled.png)
    
    <aside>
    💡 mongoDB는 자체적으로 데이터에 _id를 key값으로 가진다. 해당 값은 문자열이 아니므로 _id를 문자열로 반환하도록 props를 변환해주어야 한다.
    
    </aside>
    
    ```jsx
    ...
    
    return {
        props: {
          meetups: loadedData.map((meetup) => ({
            title: meetup.title,
            image: meetup.image,
            address: meetup.address,
            id: meetup._id.toString(),
          })),
        },
        revalidate: 1,
      };
    ```
    
- DataBase 연동하기 (데이터 상세 조회)
    
    ```jsx
    // pages/[meetupId]/index.js
    
    import { MongoClient, ObjectId } from "mongodb";
    
    ...
    
    // 동적 라우팅 설정
    export async function getStaticPaths() {
      const client = await MongoClient.connect(
        "mongodb+srv://dongboklee:ElRk3IySKRZrcEOd@cluster0.4hx7vyi.mongodb.net/meetups?retryWrites=true&w=majority"
      );
    
      const db = client.db();
      const meetupCollection = db.collection("meetups");
      const loadedData = await meetupCollection.find({}, { _id: 1 }).toArray();
    
      client.close();
    
      return {
        fallback: false,
        paths: loadedData.map((meetup) => {
          return {
            params: {
              meetupId: meetup._id.toString(),
            },
          };
        }),
      };
    }
    
    export async function getStaticProps(context) {
      const meetupId = context.params.meetupId;
    
      const client = await MongoClient.connect(
        "mongodb+srv://dongboklee:ElRk3IySKRZrcEOd@cluster0.4hx7vyi.mongodb.net/meetups?retryWrites=true&w=majority"
      );
    
      const db = client.db();
    
      const meetupCollection = db.collection("meetups");
    
      // _id는 특이한 객체 형태를 가진다.
      // 따라서 문자열을 객체화 해주어야 한다.
      const targetData = await meetupCollection.findOne({
        _id: ObjectId(meetupId),
      });
    
      client.close();
    
      return {
        props: {
          meetupData: {
            id: targetData._id.toString(),
            image: targetData.image,
            title: targetData.title,
            address: targetData.address,
            description: targetData.description,
          },
        },
      };
    }
    ```
    
- 배포하기 (메타데이터 추가)
    
    <aside>
    💡 원격 서버에 배포 과정이 남았다. 그 전에 검색엔진 결과에 프로젝트가 노출되도록 작업해주어야 한다.
    
    </aside>
    
    - 참고
    
    [메타 태그를 통한 검색엔진 최적화 (SEO)](https://www.daleseo.com/html-meta-tags-for-seo/)
    
    - next/head로부터 Head 컴포넌트를 사용한다.
    - title, meta 태그를 사용한다.
    
    ```jsx
    // pages/index.js
    
    // next
    import Head from "next/head";
    
    const HomePage = (props) => {
      return (
        <Fragment>
          <Head>
            <title>모임 웹 사이트</title>
            <meta
              name="description"
              content="모임을 만들과 많은 사람들과 교류해보세요!"
            />
          </Head>
          <MeetupList meetups={props.meetups} />;
        </Fragment>
      );
    };
    ```
    
    - 각 페이지 별로 메타 태그 설정이 가능하며, 상세 페이지의 경/우 동적으로 메타 태그 설정을 해줄 수 있다.
    
    ```jsx
    // pages/[meetupId]/index.js
    
    const MeetupDetail = (props) => {
      return (
        <section className={classes.detail}>
          <Card>
            <img src={props.image} alt={props.title} />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </Card>
        </section>
      );
    };
    ```
    
- 배포하기 (서버 배포 작업)
    
    <aside>
    💡 Vercel은 NextJS를 만든 팀에서 제공하는 호스팅 서비스로 NextJS에 최적화되어있다.
    
    </aside>
    
    - Vercel 링크
    
    [Develop. Preview. Ship. For the best frontend teams - Vercel](https://vercel.com/)
    
    1. github repository 생성
    2. vercel 연동 및 deploy
    3. mongoDB - network access 권한 허용
    
    <aside>
    💡 ※ 배포 에러
    
    빌드 폴더 .next는 제외하고 push 해야 한다.
    mongoDB 네트워크 권한 허용 처리 해야 한다.
    
    </aside>
    
    <aside>
    💡 새 모임 글을 작성하면 메인 페이지에 리스트업 되지 않는다.
    또한 DB에는 정상적으로 추가된 모임의 id를 url에 입력하여 상세페이지에 접근하면 404 에러가 발생한다.
    
    </aside>
    
- 배포하기 (동적 페이지 사전 렌더링)
    
    <aside>
    💡 getStaticPaths()
    
    fallback: false
    빌드 시점에 허용된 페이지는 데이터가 추가되기 전의 모집 리스트만 사전 렌더링 되어 있다.
    
    true, blocking
    -> 완전하지 않고 유효한 페이지가 더 있을 수 있음을 알린다.
    요청 시 페이지를 생성하고 캐시에 저장한다. 필요할 때 미리 생성한다.
    
    true: 빈 페이지 즉시 반환. 데이터가 없는 경우를 처리해야 한다.
    blocking: 페이지가 미리 생성되기 전까지 사용자는 페이지를 확인 할 수 없다.
    
    </aside>
    
    - 더 자세히 알아보기
    
    [Data Fetching: getStaticPaths | Next.js](https://nextjs.org/docs/api-reference/data-fetching/get-static-paths)
