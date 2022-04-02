import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import Navbar from '../../Shared/Header/Navbar'
import './Success.css'

function Success() {
    return (
        <>
            <Navbar/>
            <Container style={{paddingTop:"80px"}}>
                <Grid container style={{ padding: "30px" }}>
                    <title>success</title>
                    <Grid item xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img width="100%" src="https://i.postimg.cc/rpgbWBMH/emailimage.png" />
                    </Grid>
                    <Grid item xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button style={{fontSize:"30px"}} href="/">Click here and go to home page</Button>
                    </Grid>

                </Grid>
            </Container>
            <Footer/>
            
      </>
      
  )
}

export default Success