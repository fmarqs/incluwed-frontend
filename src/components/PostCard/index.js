import React from 'react';
import './style.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@mui/material';


function PostCard({ post }) {

  return (
    <Card className='root' sx={{borderRadius: '0 10 10 10' }}>
      <CardHeader
        title={<Typography variant='subtitle2'>{post.usuarios.nome}</Typography>}
      ></CardHeader>
      <CardContent>
        <Typography className='message' variant='body1' mb={2} pr={0} pl={2}>
          {post.post_texto}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PostCard;
