import React, { useEffect } from 'react';
import { PostForm, PostCard } from '../components/Index';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
  const { me } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_MAIN_POSTS_REQUEST,
    });
  }, []);

  return (
    <>
      <div>
        {me && <PostForm />}
        {mainPosts.map(post => {
          return <PostCard key={post.id} post={post} />;
        })}
      </div>
    </>
  );
};

export default Home;
