import React from 'react';
import UserCard from '../../components/UserCard';
import Header from './components/Header'
import PostCard from '../../components/PostCard'
import Feed from './components/Feed'
import Ranking from './components/Ranking'
import { makeStyles } from '@material-ui/styles'
import { Container } from '@mui/material'
import { Box } from '@mui/material'
import './style.css';
import WritePost from './components/WritePost';
import Filter from './components/Filter'


const useStyles = makeStyles({
  main: {
    height: '100vh',
    padding: 60,
    width: '1280px',
    margin: '0 auto',
  }
})

function Home() {
  const classes = useStyles();
  return (
    <div>
        <UserCard/>
        <Header/>
      <main className={classes.main}>
      <WritePost/>
      <Filter/>
        <Container maxWidth='lg'>
          <Box display='flex'>
            <Feed/>
            <Ranking/>
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default Home;
