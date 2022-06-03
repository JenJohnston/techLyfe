import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import TopCategoryItems from '../category/TopCategoryItems'

export default function TopCategories() {
    
    const data = useStaticQuery(graphql`
        {
            allSanityFeatured(filter: {_id: {eq: "featuredItems"}}) {
            nodes {
                category {
                id
                title
                slug {
                    current
                }
                _rawDescription
                }
            }
            }
        }`)

    const topCategories = data.allSanityFeatured.nodes[0].category
  
    return (
        <section className='topCategories__container'>
           <div className="topCategories__wrapper">
                <div className="section__header">
                    <h2 className='header__title'>Top <span>Categories</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero labore dolores sapiente possimus neque esse recusandae molestias laboriosam doloremque culpa nisi, ipsum non maxime corporis, illo omnis, rerum laudantium.</p>
                </div>
                <div className="categoriesContent__container">
                    <TopCategoryItems categories={topCategories}/>
                </div>
           </div>
        </section>
    )
}
