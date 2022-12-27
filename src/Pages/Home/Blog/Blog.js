import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import BlogModal from '../../Modal/BlogModal';
import './Blog.css'

function Blog() {

    const [blogs, setBlogs] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [blog, setBlog] = useState({});
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    useEffect(() => {
        axios.get("https://automantia-serverside.onrender.com/blogs").then(res => setBlogs(res.data)).catch(err => console.log(err))
    }, [])


    const detailsblog = (id) => {
        axios.get(`https://automantia-serverside.onrender.com/blogbyid/${id}`).then(res => setBlog(res.data)).catch(err => console.log(err))
        handleOpen()
    }
    return (
        <Box className="blog-wrapper">
            <Container sx={{ marginBottom: "20px" }}>
                <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>What's Hot Now&reg; Blog</Typography>
                <Grid container spacing={2}>

                    {blogs.slice(0, 2).map((el) => {
                        return (
                            <Grid item xs={12} md={6} key={el._id}>

                                <figure class="movie">
                                    <div class="movie__hero">
                                        <img src={el.img} alt="Rambo" className="movie__img" />
                                    </div>
                                    <div class="movie__content">
                                        <div class="movie__title">
                                            <h1 class="heading__primary">{el.name}</h1>
                                            <h1 style={{ color: "gray", fontWeight: "200" }} class="heading__primary">{el.subtitle}</h1>


                                        </div>
                                        <p class="movie__description">
                                            {el.description.slice(0, 100)}
                                        </p>
                                        <Button onClick={() => detailsblog(el._id)} variant="outlined" style={{ marginTop: "5px" }}>Details</Button>
                                    </div>
                                    <div class="movie__price">New Blog</div>
                                </figure>




                            </Grid>
                        )
                    })}



                </Grid>
            </Container>
            <BlogModal openModal={openModal} handleClose={handleClose} blogdetails={blog} />
        </Box>
    )
}

export default Blog
