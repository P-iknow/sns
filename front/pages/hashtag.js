import React from 'react';

const Hashtag = ({ tag }) => {
  return <div>HashTag {tag}</div>;
};

// Component.getInitialProps(ctx) 로 전달된 ctx 여기서 contenxt 이다
Hashtag.getInitialProps = async context => {
  return { tag: context.query.tag };
};

// getInitialProps 도 라이프 사이클의 일종이며 next 가 임의로 추가한 라이프 사이클
// 제일 먼저 실행되며, 가장 최초에 작업 당시에 서버의 데이터를 받아옴,
// getInitialProp 를 통해 서버쪽 데이터를 받아와 렌더링 시킬 수 있음

export default Hashtag;
