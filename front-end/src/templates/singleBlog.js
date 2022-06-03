import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

import Seo from '../components/Seo.jsx'
import CatPortableText from '../components/CatPortableText.jsx'

import { CgCalendarDates } from 'react-icons/cg'
import { BsPersonCircle } from 'react-icons/bs'
import { MdOutlineCategory } from 'react-icons/md'

export const postQuery = graphql`
    query SingleBlogQuery($id: String!){
        sanityBlog(id: { eq: $id }) {
            title
            publishedAt
            _rawBody
            coverImage {
                asset {
                    gatsbyImageData
                }
                alt
            }
            categories {
                title
                slug {
                    current
                }
            }
            author {
                name
                slug {
                    current
                }
            }
        }
}
`

export default function SingleBlog({ data }) {
    const blog = data.sanityBlog
    return (
        <>
        <Seo title={blog.title}/>
        <section className='singleBlog__container'>
            <div className="singleBlog__wrapper">
                <div className='blog__header'>
                    <GatsbyImage
                        image={blog.coverImage.asset.gatsbyImageData}
                        alt={blog.coverImage.alt}
                        className="blogHeader__image"
                    />
                    <div className="img-overlay">
                        <h2 className="blogPage__title">tech<span>Blog</span></h2>
                    </div>
                    <div className="header__content">
                        <h2 className="blog__title">{blog.title}</h2>
                        <h3 className="publishedAt"><CgCalendarDates/>{blog.publishedAt}</h3>
                        <h3 className="categories">
                            <MdOutlineCategory/>
                            {blog.categories.map((item, index) => (
                                <p key={item.slug.current}>
                                    <Link to={`/categories/${item.slug.current}`}>
                                        {item.title}
                                    </Link>
                                    {index < blog.categories.length - 1 ? ' | ' : ''}
                                </p>
                            ))}
                        </h3>
                        <h3 className="blog__author">
                            <BsPersonCircle/>
                            <Link to={`/authors/${blog.author.slug.current}`}>
                                {blog.author.name}
                            </Link>
                        </h3>
                    </div>
                </div>
                <div className="blog__body">
                    <CatPortableText value={blog._rawBody}/>
                </div>
            </div>
        </section>
        </>
    )
}