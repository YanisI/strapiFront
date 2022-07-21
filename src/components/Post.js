import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { apiUrl } from '../config';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';


const Post = () => {

    const { id } = useParams();

    const [post, setPost] = useState();
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        fetch(`${apiUrl}/api/posts/${id}?populate=*`, {
            method: "GET",
            headers: {
                'Accept': "Application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                setPost(res);
                console.log(res);
                setIsLoading(false);
            });

    }, [id])

    return (
        <div>
            <NavLink
                to={`/`}
            >
                <Button variant="contained">
                    Back
                </Button>
            </NavLink>
            {isLoading ?
                <Grid container spacing={3}>
                    <Grid item sm="6">
                        <Skeleton variant="rect" width="100%" height="400px" />
                    </Grid>
                    <Grid item sm="6">
                        <Skeleton
                            variant="text"
                            width={300}
                            height={80}
                        />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </Grid>

                </Grid>
                :
                <Grid container spacing={3}>
                    <Grid item sm="6">
                        <img 
                        src={apiUrl + post.data.attributes.image.data.attributes.formats.small.url} 
                        alt="article_image"
                        />
                    </Grid>
                    <Grid item sm="6">
                        <h1 className="title">
                            {post.data.attributes.title}
                        </h1>
                        <p className="content">
                            {post.data.attributes.content}
                        </p>
                    </Grid>
                </Grid>

            }
        </div>
    )
}

export default Post