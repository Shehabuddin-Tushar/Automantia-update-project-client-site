import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import Navbar from '../../Shared/Header/Navbar'


function About() {
  return (
      <>
          
              <title>About us</title>
              <Navbar />
          <div style={{paddingTop:"50px"}}>
              <Box sx={{
                  background: `url("https://i.postimg.cc/13fd628s/pic13.jpg")`,
                  backgroundSize: "100% 100%",
                  height: "300px",
                  objectFit: "cover"
              }}>
                  <div style={{
                      backgroundColor: "rgba(207,216,220,0.5)",
                      width: "75%",
                      paddingTop: "50px",
                      paddingLeft: "50px",
                      height: "84%",
                      textAlign: "center",
                      margin: "0 auto"
                  }}>

                      <Typography variant="h4" style={{
                          fontWeight: "bold",
                          width: "40%",
                          margin: "0 auto",
                          textAlign: "center",
                          color: "#Feca00",
                          textShadow: "1px 2px grey",
                          fontSize: { sm: "25px" },
                          width: { sm: "90%" },
                          paddingTop:"30px"
                      }}>About Automantia</Typography>
                      <Typography sx={{
                          border: "3px solid #Feca00",

                          width: "10%",
                          margin: "30px auto",
                      }}></Typography>
                      <Typography variant="body2" gutterBottom paragraph sx={{
                          fontWeight: "bold",
                          width: "40%",
                          margin: "10px auto",
                          textAlign: "center",
                          color: "black",
                          fontSize: "15px",
                          width: { sm: "90%" }
                      }}>
                          Our mission is To empower the community by ensuring state of the art method which strengthens the belief in quality sevice.
                          To utilize the power of youth by serving and meeting the emerging needs both in local and global network
                      </Typography>

                  </div>
              </Box>
              <Container sx={{
                  paddingTop: "50px",
                  paddingBottom:"50px"
              }}>
                  <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12}>
                          <Typography variant="h4" paragraph>WE PIONEERED TECHNOLOGY  20 YEARS AGO. AND WE NEVER STOPPED.</Typography>
                          <Typography variant="body1" style={{ width: "80%" }} paragraph>As changes in technology have accelerated, it’s become even more
                              essential for people to master technology to be productive, invaluable employees
                              who optimize, program and invent solutions—and even grow companies of their own.</Typography>
                          <Typography variant="body1" style={{ width: "80%" }} paragraph>For 20 years, LearnOn has provided more than 10
                              million students with industry-leading technical
                              training that delivers the most relevant and intuitive computer courses
                              and certifications.</Typography>


                          <Typography variant="h6" paragraph>Continuously upgrade the people who drive your business:</Typography>
                          <Typography variant="body1" style={{ width: "80%" }} paragraph>
                              We’ll create innovative training solutions that work for your business and we’ll account
                              for the results—whether your company is small, mid-sized or a global enterprise. LearnOn
                              training yields a 4:1 benefit-to-cost ratio, based on manager surveys of the improved
                              performance and productivity immediately following our training.
                          </Typography>
                      </Grid>


                  </Grid>
              </Container>
          </div>
              <Footer />
         
      </>
  )
}

export default About