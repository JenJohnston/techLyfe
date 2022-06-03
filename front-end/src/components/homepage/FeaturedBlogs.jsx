import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import BlogCards from '../blog/BlogCards'

export default function FeaturedBlogs() {
    
    const data = useStaticQuery(graphql`
        {
            allSanityFeatured(filter: {_id: {eq: "featuredItems"}}) {
                nodes {
                  blogs {
                    title
                    id
                    categories {
                      title
                      slug {
                        current
                      }
                    }
                    publishedAt
                    coverImage {
                      alt
                      asset {
                        gatsbyImageData
                      }
                    }
                    slug {
                        current
                      }
                  }
                }
            }
        }
    `)
   
    const featuredBlogs = data.allSanityFeatured.nodes[0].blogs

    return (
        <section className='featuredBlogs__container'>
            <div className="featureBlogs__wrapper">
                <div className="section__header">
                    <h2 className='header__title'>Featured <span>Blogs</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero labore dolores sapiente possimus neque esse recusandae molestias laboriosam doloremque culpa nisi, ipsum non maxime corporis, illo omnis, rerum laudantium.</p>
                </div>
                <div className="featuredCard__container">
                    <BlogCards blogs={featuredBlogs} />
                </div>
            </div>
        </section>
    )
}
