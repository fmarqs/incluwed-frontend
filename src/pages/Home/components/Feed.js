import React, { useState, useEffect } from 'react';
import PostCard from '../../../components/PostCard';
import { api } from '../../../api/api';

function Feed() {
  const [posts, setPosts] = useState([]);

  const id = localStorage.getItem('id');

    useEffect(() => {
        api.get(`posts?pag=0&qtd=10&usuario_id=${id}`).then(({ data }) => {
            setPosts(data.content)
        })
    }, [posts])

  return (
    <div>
      {posts.map((post, key) => (
        <PostCard key={key} post={post} />
      ))}
    </div>
  );
}

export default Feed;
