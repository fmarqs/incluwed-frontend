import React, { useState, useEffect } from 'react';
import PostCard from '../../../components/PostCard';
import { api } from '../../../api/api';
import UserCard from '../../../components/UserCard';
import Header from './Header'
import Ranking from './Ranking'
import { makeStyles } from '@material-ui/styles'
import { Container } from '@mui/material'
import { Box } from '@mui/material'
import WritePost from './WritePost';
import Filter from './Filter'


const useStyles = makeStyles({
    main: {
      height: '100vh',
      padding: 60,
      width: '1280px',
      margin: '0 auto',
    }
  })
  

function Profile() {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);

    const id = localStorage.getItem('id')

    useEffect(() => {
        api.get(`posts?pag=0&qtd=10&usuario_id=${id}`).then(({ data }) => {
            setPosts(data.content)
        })
    }, [])

  return (
        <div>
            <UserCard/>
            <Header/>
          <main className={classes.main}>
          <WritePost/>
          <Filter/>
            <Container maxWidth='lg'>
              <Box display='flex'>
              <div>
                {posts.map((post, index) => (
                <PostCard index={index} post={post} />
                ))}
                 </div>
                <Ranking/>
              </Box>
            </Container>
          </main>
        </div>
    
  );
}

export default Profile;
