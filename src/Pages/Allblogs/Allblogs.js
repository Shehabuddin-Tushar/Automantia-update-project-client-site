import React from 'react'
import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import { useState, useEffect } from 'react'
import BlogModal from '../Modal/BlogModal';
import Footer from '../../Shared/Footer/Footer'
import Navbar from '../../Shared/Header/Navbar'

function Allblogs() {
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
    <>
      <title>Blogs</title>
      <Navbar />
      <Box className="blog-wrapper" style={{ marginTop: "50px" }}>
        <Box sx={{
          background: `url("https://i.postimg.cc/cLgrnFcY/carshop.jpg")`,
          backgroundSize: "100% 100%",
          height: "300px",
          objectFit: "cover",
          marginBottom: "30px"
        }}>
          <div className="aboutoverlay" style={{
            backgroundColor: "rgba(207,216,220,0.5)",
            width: "75%",
            paddingTop: "10px",
            paddingLeft: "50px",
            height: "100%",
            textAlign: "center",
            margin: "0 auto"
          }}>

            <Typography variant="h4" sx={{
              fontWeight: "bold",
              width: "40%",
              margin: "0 auto",
              textAlign: "center",
              color: "#Feca00",
              textShadow: "1px 2px grey",
              fontSize: { xs: "20px", sm: "20px", md: "35px" },
              width: { sm: "90%", xs: "90%" },
              paddingTop: "30px"
            }}>Automantia Blogs</Typography>
            <Typography sx={{
              border: "3px solid #Feca00",

              width: "10%",
              margin: { xs: "2px auto", md: "25px auto" },
            }}></Typography>
            <Typography variant="body2" gutterBottom paragraph sx={{
              fontWeight: "bold",
              width: "40%",
              margin: { xs: "0px", md: "10px auto" },
              textAlign: "center",
              color: "black",
              fontSize: "15px",

              width: { sm: "95%", xs: "100%", lg: "80%" }
            }}>
              Our mission is To empower the community by ensuring state of the art method which strengthens the belief in quality sevice.
              To utilize the power of youth by serving and meeting the emerging needs both in local and global network
            </Typography>

          </div>
        </Box>
        <Container sx={{ marginBottom: "20px" }}>

          <Grid container spacing={2}>

            {blogs.map((el) => {
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
      <Footer />
    </>
  )
}

export default Allblogs