import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React,{useState,useEffect} from 'react'
import StarIcon from '@mui/icons-material/Star';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './Review.css'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", boxShadow: "gray 0px 5px 15px", borderRadius: "0px 5px 5px 0px",   height: "50px", width: "50px", alignItems: "center", justifyContent: "center" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", boxShadow: "gray 0px 5px 15px", borderRadius: "5px 0px 0px 5px",  zIndex: "1",  height: "50px", width: "50px", alignItems: "center", justifyContent: "center" }}
            onClick={onClick}
        />
    );
}
function Review() {
    const [allreviews,setAllreviews]=useState([]);
   
    useEffect(()=>{

        fetch("https://warm-depths-72297.herokuapp.com/reviews").then(res=>res.json()).then(data=>setAllreviews(data))

  },[])

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
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
    return (
        <>
            

              
            <Box className="reviews-wrapper" sx={{ marginTop: "50px", marginBottom: "50px" }}>
                

                <Container>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>What's our customer say's</Typography>
                 
                    
                    <Slider {...settings} style={{marginLeft:"20px"}}>
                        
                                

                                {

                                    allreviews.map((review) => {
                                        return (

                                            <>
                                                <div class="card-container" style={{marginLeft:"10px"}}>
                                                    <div style={{display:"flex",justifyContent:"center"}}>
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
                                                    <p>{review.reviewtext.slice(0, 40)}</p>
                                                   
                                                    
                                                </div>

                                               
                                            </>

                                            // <Grid item xs={12} sm={6} md={11} style={{height:"100px"}}>
                                            //     <Card sx={{}}>
                                            //         <CardHeader
                                            //             avatar={
                                            //                 <Avatar sx={{}} aria-label="recipe">
                                            //                     {review.username.slice(0, 1)}
                                            //                 </Avatar>
                                            //             }
                                            //             action={
                                            //                 <IconButton aria-label="settings">

                                            //                 </IconButton>
                                            //             }
                                            //             title={review.username}
                                            //             subheader={review.reviewdate}
                                            //         />

                                            //         <CardContent>
                                            //             {
                                            //                 [...Array(review.rating).keys()]
                                            //                     .map(() => {
                                            //                         return <StarIcon sx={{ color: "goldenrod" }} />
                                            //                     })
                                            //             }

                                            //             <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                            //                 {review.reviewtext.slice(0, 100)}.
                                            //             </Typography>

                                            //         </CardContent>

                                            //     </Card>
                                            // </Grid>


                                        )
                                    })


                                }
                           

                    </Slider>

                </Container>
            </Box>
        </>
        
    )
}

export default Review
