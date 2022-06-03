import { graphql } from 'gatsby'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';

import Seo from '../components/Seo.jsx'
import CatPortableText from '../components/CatPortableText.jsx'
import BlogCards from '../components/blog/BlogCards'

export const authorQuery = graphql`
    query SingleAuthorQuery($id: String!){
        sanityAuthor(id: { eq: $id }){
            name
            _rawBio
            profileImage {
                asset {
                gatsbyImageData
                }
                alt
            }
        }
        allSanityBlog(filter: { author: { id: { eq: $id } } }) {
            nodes {
                id
                title
                publishedAt
                slug {
                  current
                }
                categories {
                  title
                  slug {
                    current
                  }
                }
                coverImage {
                  alt
                  asset {
                    gatsbyImageData
                  }
                }
              }
        }
    }
`

export default function SingleAuthor({ data }){

    const author = data.sanityAuthor;
    const blogs = data.allSanityBlog.nodes;
    console.log(author.name)
    return (
        <>
            <Seo title={author.name}/>
            <section className="authorSingle__container">
                <div className="authorSingle__wrapper">
                    <div className="author__header">
                        <GatsbyImage
                            image={author.profileImage.asset.gatsbyImageData}
                            alt={author.profileImage.alt}
                            className="profileImage"
                        />
                        <div className="header__content">
                            <h1>{author.name}</h1>
                            <CatPortableText value={author._rawBio} />
                        </div>
                    </div>
                    <div className="author__subheading">
                        <h2>author<span>Blogs</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sequi obcaecati qui voluptas quasi omnis, tempore nostrum officiis tempora quaerat iste officia quas</p>
                    </div>
                    <div className="categoryBlogs__container">
                        <BlogCards blogs={blogs} />
                    </div>
                </div>
            </section>
        </>
    )
}