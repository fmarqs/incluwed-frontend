import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  caption: {
    marginRight: theme.spacing(1),
  },
  message: {
    height: "auto",
    marginBottom: theme.spacing(2),
    padding: "0 24px",
  },
  image: {
    height: 300,
    widht: "100%",
    maxWidht: "100%",
    margin: "0 auto",
  },
}));

function PostCard({ post }) {
  const classes = useStyles();

  return (
    <Card className="root" >
      <CardHeader
        avatar={<Avatar src={post.author.avatar} />}
        title={<Typography variant="h6">{post.author.name}</Typography>}
        subheader={
          <div className="subheader">
            <Typography variant="caption" className={classes.caption}>
              {post.author.username}
            </Typography>
            <Typography variant="caption" className={classes.caption}>
              at
            </Typography>
            <Typography variant="caption" className={classes.caption}>
              {post.date}
            </Typography>
          </div>
        }
      ></CardHeader>
      <CardContent>
        <Typography className={classes.message} variant="body1">
          {post.text}
        </Typography>
        <CardMedia component="img" alt="image post" height="300" image={post.image} />
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default PostCard;
