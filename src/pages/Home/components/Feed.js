import React, { useState, useEffect } from 'react';
import PostCard from '../../../components/PostCard';
import { api } from '../../../api/api';

function Feed() {
  const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get(`posts?pag=0&qtd=10`).then(({ data }) => {
            setPosts(data.content.reverse())
        })
    }, [posts])

  return (
    <div>
        
        {posts.map((post, index) => (
        <PostCard index={index} post={post} />
    ))}
    </div>
  );
}

export default Feed;
