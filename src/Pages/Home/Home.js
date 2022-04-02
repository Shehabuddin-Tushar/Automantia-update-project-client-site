import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Shared/Footer/Footer'
import Navbar from '../../Shared/Header/Navbar'
import Blog from './Blog/Blog'
import Products from './Products/Products'
import Review from './Reviews/Review'
import Topbanner from './Topbanner/Topbanner'

function Home() {
    return (
        <div>
            <title>Home</title>
            <Navbar/>
            <Topbanner/>
            <Products item={6} />
            <div className="dark fire" style={{ textAlign: "center" }}>
                <Link to="/products"><button class="bn632-hover bn20">Go to product page</button></Link>
            </div>
            <Review/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default Home
