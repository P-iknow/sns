import React from 'react';
import PropTypes from 'prop-types';

const User = ({ id }) => {
  return <div>User {id}</div>;
};

User.propTypes = {
  id: PropTypes.number.isRequired,
};

User.getInitialProps = async context => {
  console.log('user getInitialProps', context.query.id);
  //getInitalProps 내부에서 아래 객체를 리턴하면 함수형 컴포넌트에 prop로 전달할 수 있음,
  return { id: parseInt(context.query.id, 10) };
};

export default User;
