import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import Singleproduct from '../Singleproduct/Singleproduct';
import './Products.css'
function Products({ item }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("https://warm-depths-72297.herokuapp.com/products").then(res => res.json()).then(data => setProducts(data))

    }, [products])
    return (
        <Box className="products-wrapper" sx={{ marginBottom: "40px" }}>
            <title>Shop</title>
            <Container>
                <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "30px", textShadow: "2px 4px 3px rgba(0,0,0,0.3)", fontWeight: "bold" }}>Our Poducts</Typography>
                <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "40px", color: "gray" }}>Select your favourite Product</Typography>
                <Grid container spacing={2}>
                    {
                        products.slice(0, item).map((product) => {
                            return (
                                <Singleproduct key={product.name} product={product} />
                            )
                        })
                    }

                </Grid>
            </Container>

        </Box>
    )
}

export default Products
