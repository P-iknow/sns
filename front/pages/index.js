import React from 'react';
import { PostForm, PostCard } from '../components/Index';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  return (
    <>
      <div>
        {isLoggedIn && <PostForm />}
        {mainPosts.map(post => {
          return <PostCard key={post} post={post} />;
        })}
      </div>
    </>
  );
};

export default Home;