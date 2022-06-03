import React from 'react'
import FeaturedBlogs from '../components/homepage/FeaturedBlogs'
import HeroSection from "../components/homepage/HeroSection"
import TopCategories from '../components/homepage/TopCategories'
import Seo from '../components/Seo'

// markup
const IndexPage = () => (
    <>
        <Seo title="Home"/>
        <HeroSection/>
        <FeaturedBlogs/>
        <TopCategories/>
        
    </>
)
 
export default IndexPage
