import { graphql } from 'gatsby'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';

import CatPortableText from '../components/CatPortableText.jsx'
import Seo from '../components/Seo.jsx'
import BlogCards from '../components/blog/BlogCards'

export const categoryQuery = graphql`
    query SingleCategoryQuery($id: String!){
        sanityCategory(id: { eq: $id }) {
            title
            _rawDescription
            coverImage {
              asset {
                gatsbyImageData
              }
              alt
            }
          }
        allSanityBlog(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
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

export default function CategorySingle({ data }){
    const category = data.sanityCategory;
    const blogs = data.allSanityBlog.nodes;
    return (
        <section className="categorySingle__container">
            <Seo title={category.title}/>
            <div className="categorySingle__wrapper">
                <div className="page__header">
                    <GatsbyImage
                        image={category.coverImage.asset.gatsbyImageData}
                        alt={category.coverImage.alt}
                        className="coverImage"
                    />
                    <div className="header__content">
                        <h1>{category.title}</h1>
                        <CatPortableText value={category._rawDescription} />
                    </div>
                </div>
                <div className="categorySingle__subheading">
                    <h2>{category.title}<span>Blogs</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nostrum debitis animi non! Nam, perspiciatis maxime? Impedit expedita odit dignissimos maxime. Autem dolores dolore pariatur obcaecati neque ipsum rem maxime.</p>
                </div>
                <div className="categoryBlogs__container">
                    <BlogCards blogs={blogs} />
                </div>
            </div>
        </section>
    )
}