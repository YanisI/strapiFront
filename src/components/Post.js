import React, { useEffect, useState } from 'react'

const Post = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    useEffect(() => {

        fetch("http://localhost:1337/api/posts?populate=*", {
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
        <div>
            {isLoading ?
                "Loading" :
                posts.map(post => {
                    console.log(post)
                    return (<h2> {post.attributes.title}</h2>);
                })
            }
        </div>
    )
}

export default Post