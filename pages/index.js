import React from 'react';
import { PostForm, PostCard } from '../components/Index';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: 'p-iknow',
      },
      content: '첫 번째 게시글',
      img:
        'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    },
  ],
};

const Home = () => {
  return (
    <>
      <div>
        {dummy.isLoggedIn && <PostForm />}
        {dummy.mainPosts.map(post => {
          return <PostCard key={post} post={post} />;
        })}
      </div>
    </>
  );
};

export default Home;
