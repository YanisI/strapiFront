import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { apiUrl } from '../config';
import { NavLink } from "react-router-dom";


const CardPost = ({ post }) => {

    console.log(post)
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={post.image !== null ? apiUrl + post.attributes.image.data.attributes.formats.small.url : "...."}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {post.attributes.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.attributes.content.substring(0, 100)} ...
                </Typography>
            </CardContent>
            <CardActions>
                <NavLink
                    to={`/Post/${post.id}`}
                >
                    <Button size="small">
                        Learn More
                    </Button>
                </NavLink>
            </CardActions>
        </Card>
    );
}

export default CardPost
