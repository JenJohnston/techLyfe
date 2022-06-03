import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function HeroSection() {
    

    return (
        <section className='hero__container'>
            <div className="hero__wrapper">
                <div className="left">
                    <div className="hero__header">
                        <h1 className='hero__heading'>Tech<span>Lyfe</span></h1>
                        <h2>Exploring Today's World With Technology</h2>
                    </div>
                    <p className='hero__text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam pariatur ut itaque voluptate inventore quod cumque veritatis ullam, ipsum commodi libero eum mollitia numquam! Exercitationem quae quibusdam voluptates blanditiis eaque!</p>
                    <button className='hero__btn border-gradient-pink'>Subscribe To TechLyfe</button>
                </div>
                <div className="right">
                    <StaticImage 
                        className='hero__image'
                        src="../../images/earth.jpg"
                        alt="earth"
                        placeholder='blurred'
                        objectPosition="50% 30%"
                    />
                </div>
            </div>
        </section>
    )
}
