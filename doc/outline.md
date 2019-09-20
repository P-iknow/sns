## Frontend 

- React, Next

- Redux

- Redux-saga

- Styled Components 

## Backend 

- Express
- Mysql
- ORM(Sequalize)
- Passport
- multer(S3)
- Socket.IO

### 프론트 서버와 벡엔드 서버

## [Web NMS Front-End Server: Overview](http://www.webnms.com/telecom/help/developer_guide/modules_and_services_overview/befearch.html)

![img](https://www.webnms.com/telecom/help/developer_guide/front_end_server/images/fe_architecture.jpg)

> Rough Idea**:
> When you have a server farm, some servers are designated for the purpose of receiving requests  and sending them to other servers. These servers are called front end servers.
>
> The servers which do the actual processing are called backend servers.
>
> This improves the scalability of services. You can provide multiple front end servers accessing the same backend server or a single front end server with multiple backend servers, where possibly the front end server acts as a load balancer.

| 정적인 부분 :                       | *틀, 베너, 로그인 창 틀, favicon.ico(아이콘), CSS(속성)* |
| ----------------------------------- | -------------------------------------------------------- |
| **동적인 부분** *:  (WAS 서버이용)* | *로그인 창 틀안에 내용, 실시간 검색어 변화*              |

추후 트래픽 증가로 인해 서버의 증축이 필요할 때, 프론트 서버와 백엔드 서버가 하나의 서버로 구성될 경우 증축이 필요한 서버는 Backend임에도 불구하고 Frontend 서버 또한 불필요하게 증축해야 한다. 이를 스케일링 이슈라 하는데, 스케일링 이슈를 피하기 위해서 초기에 백엔드 서버와 프론트 서버를 따로 구성한다.

## Why Next.js

### 코드스플리팅

SPA 는 번들파일 크기가 상당하다. 실제 사용자는 1-10 페이지에 대한 정보만 필요한데, 웹펙이 말아주는 번들은 500페이지 전체에 대한 js 파일을 준다. 이런 문제로 인해 코드를 적적할 단위로 끊어서 스플리팅 해줘야 한다. 

### SSR(server side rendering)

SPA는 단일 페이지로 동작하기 때문에 SEO 에 취약하다. 또한 초기 로딩속도에서 SSR 보다 느리다. SSR이 필요해지는 이유다. 

### Why

next.js 의 도움없이 서버사이드 렌더링이 가능하지만  코드스플리팅 까지 해야한다면 복잡하고 어렵다. next.js 가 그 복잡함을 해결해준다. 그래서 next.js를 사용한다. 

