import React from "react";
import "./style.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

function PostCard({ post }) {
  return (
    <Card className="root">
      <CardHeader
        avatar={<Avatar src={post.author.avatar} />}
        title={<Typography variant="h6">{post.author.name}</Typography>}
        subheader={
          <div className="subheader">
            <Typography variant="caption" className="typography">
              {post.author.username}
            </Typography>
            </div>
            <div>
            <Typography variant="caption" className="typography">
              {post.date}
            </Typography>
          </div>
        }
      ></CardHeader>
      <CardContent></CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default PostCard;
