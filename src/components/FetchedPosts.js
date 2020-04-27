import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import { fetchPosts } from './../redux/actions';

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const isLoading = useSelector((state) => state.app.loading);
  if (isLoading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
    </div>
    )
  };
  if (!posts.length) {
    return <button 
      className="btn btn-primary"
      onClick={() => {
        dispatch(fetchPosts());
      }}
    >Запросить посты</button>
  };
  
  return posts.map((post) => <Post post={post} key={post.id}/>)
}
