import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import StarIcon from '@mui/icons-material/Star';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './Review.css'
import ReviewModal from '../../Modal/Modal';
import axios from 'axios';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", boxShadow: "gray 0px 5px 15px", borderRadius: "0px 5px 5px 0px", height: "50px", width: "50px", alignItems: "center", justifyContent: "center" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", boxShadow: "gray 0px 5px 15px", borderRadius: "5px 0px 0px 5px", zIndex: "1", height: "50px", width: "50px", alignItems: "center", justifyContent: "center" }}
            onClick={onClick}
        />
    );
}
function Review() {
    const [allreviews, setAllreviews] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [review, setReview] = useState({});
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    useEffect(() => {

        fetch("https://automantia-serverside.onrender.com/reviews").then(res => res.json()).then(data => setAllreviews(data))

    }, [])

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]



    };

    const reviewdetails = (id) => {
        axios.get(`https://automantia-serverside.onrender.com/reviewbyid/${id}`).then(res => setReview(res.data)).catch(err => console.log(err))
        handleOpen()
    }
    return (
        <>



            <Box className="reviews-wrapper" sx={{ marginTop: "50px", marginBottom: "50px" }}>


                <Container>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>What's our customer say's</Typography>


                    <Slider {...settings} style={{ marginLeft: "10px" }}>



                        {

                            allreviews.map((review) => {
                                return (

                                    <>
                                        <div class="card-container" style={{ marginLeft: "10px" }}>
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                                            </div>

                                            <h3> {review.username}</h3>
                                            <div>
                                                {
                                                    [...Array(review.rating).keys()]
                                                        .map(() => {
                                                            return <StarIcon sx={{ color: "goldenrod" }} />
                                                        })
                                                }
                                            </div>

                                            <Button variant="outlined" onClick={() => reviewdetails(review._id)}>Client review</Button>

                                        </div>


                                    </>



                                )
                            })


                        }


                    </Slider>

                </Container>
            </Box>
            <ReviewModal openModal={openModal} handleClose={handleClose} clientreview={review} />
        </>

    )
}

export default Review
