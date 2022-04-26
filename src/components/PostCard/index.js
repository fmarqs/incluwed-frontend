import React from 'react';
import './style.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@mui/material';
import Avatar from '@material-ui/core/Avatar';

function PostCard({ post }) {
  return (
    <Card className='root' sx={{borderRadius: '0 10 10 10' }}>
      <CardHeader
        avatar={<Avatar src={post.author.avatar} />}
        title={<Typography variant='h6'>{post.author.name}</Typography>}
        subheader={
          <div className='subheader'>
            <Typography variant='caption' mr={1}>
              {post.author.username}
            </Typography>
            <Typography variant='caption' mr={1}>
              at
            </Typography >
            <Typography variant='caption' mr={1}>
              {post.date}
            </Typography>
          </div>
        }
      ></CardHeader>
      <CardContent>
        <Typography className='message' variant='body1' mb={2} pr={0} pl={2}>
          {post.text}
        </Typography>
        <CardMedia component='img' alt='image post' height='300' image={post.image} />
      </CardContent>
    </Card>
  );
}

export default PostCard;
