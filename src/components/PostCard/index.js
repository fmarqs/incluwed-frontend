import React from 'react';
import './style.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import StarIcon from '@mui/icons-material/Star';


function PostCard({ post }) {

  return (
    <Card className='root' sx={{borderRadius: '0 10 10 10' }} >
      <CardHeader
        title={<Typography variant='subtitle2'>{post.usuarios.nome} {post.usuarios.sobrenome}</Typography>}
      ></CardHeader>
      <CardContent>
      <Typography variant='h6' mb={2} pr={0} pl={2}>
          {post.post_titulo}
      </Typography>
      <Typography variant='body2' mb={2} pr={0} pl={2}>
          Local: {post.post_enderecoLocal} <LocationOnOutlinedIcon sx={{fontSize: 'small', color: 'red'}}/>
      </Typography>
      <Typography variant='body2' mb={2} pr={0} pl={2}>
          Avaliação: {post.post_nota} <StarIcon sx={{fontSize: 'small', color: 'yellow'}}/>
      </Typography>
      <Typography className='message' variant='body1' mb={2} pr={0} pl={2}>
          {post.post_texto}
      </Typography>
      </CardContent>
    </Card>
  );
}

export default PostCard;
