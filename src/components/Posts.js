import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import CardPost from './CardPost';
import { apiUrl } from '../config';

const Posts = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    useEffect(() => {

        fetch(`${apiUrl}/api/posts?populate=*`, {
            method: "GET",
            headers: {
                'Accept': "Application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                setPosts(res.data);
                setIsLoading(false);
            });

    }, []);


    return (
        <div className='posts'>
            <Grid container spacing={2}>
                {isLoading ?
                    (
                        <Box >
                            <Skeleton variant="rectangular" width={210} height={118} />
                            <Skeleton width="60%" />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />

                        </Box>
                    )
                    :
                    (
                        posts.map((post,index) => {
                            return <CardPost post={post}  key={index}/>
                        })
                    )
                }
            </Grid>
        </div >
    )
}

export default Posts