import React,{useState} from 'react'
import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Navbar from '../../Shared/Header/Navbar'
import Footer from '../../Shared/Footer/Footer'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebIcon from '@mui/icons-material/Web';
import LanguageIcon from '@mui/icons-material/Language';
import DnsIcon from '@mui/icons-material/Dns';
import './Contact.css'
function Contact() {

    const [socials, setSocials] = useState({
        facebook: {
            link: "https://www.facebook.com/md.shehabuddintushar",
            text: "tushar facebook",
            icon: <FacebookIcon />,
        },

        github: {
            link: "https://github.com/Shehabuddin-Tushar",
            text: "tushar github",
            icon: <GitHubIcon />,
        },

        Linkedin: {
            link: "https://www.linkedin.com/in/shehabuddintushar-9b07ba171/",
            text: "tushar linkedin",
            icon: <LinkedInIcon />,
        }


    })
  return (
      <div>
          <title>contact us</title>
          <Navbar />
          <Box sx={{
              background: `url("https://i.postimg.cc/13fd628s/pic13.jpg")`,
              backgroundSize: "100% 100%",
              height: "400px",
              objectFit: "cover"
          }}>
              <div style={{
                 
                  width: "75%",
                  paddingTop: "55px",
                  paddingLeft: "0px",
                  height: "100%",
                  textAlign: "center",
                  margin: "0 auto"
              }}>

                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.1575835326967!2d90.46948421486033!3d23.7060659963857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b70c53aacefb%3A0x7e109d96c077b32a!2z4Ka44Ka-4Kau4Ka44KeB4KayIOCmueCmlSDgppbgpr7gpqgg4Ka44Kah4Ka84KaVLCDgpqLgpr7gppXgpr4!5e0!3m2!1sbn!2sbd!4v1648833882793!5m2!1sbn!2sbd"
                      style={{ width: "100%", height: "345px" }}></iframe>

              </div>
          </Box>
          <Container style={{marginTop:"20px",marginBottom:"20px"}}>
              <Grid container spacing={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <form action="https://formsubmit.co/freelancerrtushar@gmail.com" method="POST">
                          <Grid container spacing={2}>

                              <Grid item xs={12} sm={6}>
                                  <TextField required fullWidth name="name" label="Name" />
                              </Grid>

                              <Grid item xs={12} sm={6}>
                                  <TextField required fullWidth name="email" label="Email" />
                                  <input type="hidden" name="_captcha" value="false"></input>
                                  <input type="hidden" name="_next" value="https://automantia-authantication.web.app/success"></input>
                                  <input type="hidden" name="_autoresponse" value="Your email send successfully.Thanks.We will contact you very soon."></input>
                              </Grid>

                              <Grid item xs={12}>
                                  <TextField required fullWidth name="message" label="Message" multiline rows={8} />
                              </Grid>

                              <Grid item xs={12}>
                                  <Button type="submit" variant="contained" size="large" style={{ width: "100%", backgroundColor: "rgb(69, 180, 245)", color: "black", borderRadius: "5px" }}>Submit</Button>
                              </Grid>

                          </Grid>
                      </form>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Grid container>
                         
                          <Grid item xs={12}>
                              <Typography variant="h3" className='howhelp' style={{}}>
                                  How can we help?
                              </Typography>

                             
                              <Typography className="contactinfo_item">
                                  If you don't find what you need, fill out our contact form
                              </Typography>
                              <Typography variant="h5" className="infocon" style={{marginTop:"10px",fontWeight:"bold"}}>
                                  Our contact information
                              </Typography>
                              <Typography className="contactinfo_item">
                                  <span>Address : </span> Matuail,mogolnogor,jatrabari-dhaka
                              </Typography>
                          </Grid>

                          <Grid item xs={12}>
                              <Typography className="contactinfo_item">
                                  <span>Phone : </span> 01409130405
                              </Typography>
                          </Grid>

                          <Grid item xs={12}>
                              <Typography className="contactinfo_item">
                                  <span>Email : </span> freelancerrtushar@gmail.com
                              </Typography>
                          </Grid>
                      </Grid>
                      <Grid container className="contact_socialcontainer">
                          {Object.keys(socials).map((key) => {
                              return (
                                  <Grid item className="contact_social">
                                      <a href={socials[key].link} target="_blank">{socials[key].icon}</a>
                                  </Grid>


                              )
                          })}
                      </Grid>
                  </Grid>
                 
                 
                  
              </Grid>
              
          </Container>
          <Footer/>
    </div>
  )
}

export default Contact