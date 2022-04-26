import React from 'react';
import Header from './components/Header'
import Feed from './components/Feed'
import Ranking from './components/Ranking'
import { makeStyles } from '@material-ui/styles'
import { Toolbar } from '@material-ui/core'
import { Container } from '@mui/material'
import { Box } from '@mui/material'
import CommonButton from '../../components/commons/Button.js';
import { Tooltip } from '@mui/material';
import { Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import './style.css';
import WritePost from './components/WritePost';
import { IconButton } from '@mui/material'


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
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
    <div className={classes.root}>
        <Header/>
        <Toolbar/>
      <main className={classes.main}>
      <CommonButton 
      sx={{
          width: 167,
          height: 40,
          left: 65,
          background: '#3498DB',
          border: '1px solid #000000',
          borderBottom: 'none',
          boxSizing: 'border-box',
          borderRadius: '10px 10px 0px 0px',
      }}
      variant='contained'>
        <p className='font-style'> Feed </p> 
      </CommonButton>
      <WritePost/>
      <Tooltip title='Filtrar' placement='top'>
      <Button
      sx={{
        width: 10,
        height: 40,
        left: 570,
        top: -10,
        background: '#3498DB',
        boxSizing: 'borderBox',
        borderRadius: 10
      }}
      variant='contained'
      > 
        <IconButton> <FilterListIcon sx={{color: '#172668'}}/> </IconButton>
      </Button>
      </Tooltip>
      <CommonButton 
      sx={{
        width: 167,
        height: 40,
        left: 1220,
        background: '#3498DB',
        border: '1px solid #000000',
        borderBottom: 'none',
        boxSizing: 'border-box',
        borderRadius: '10px 10px 0px 0px',
        position: 'fixed'
      }}
        variant='contained'>
          <p className='font-style'> Ranking </p>
      </CommonButton>
        <Container maxWidth='lg'>
          <Box display='flex'>
            <Feed />
            <Ranking/>
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default Home;
