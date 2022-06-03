import { graphql } from 'gatsby'
import React from 'react'

import Seo from '../components/Seo.jsx'
import BlogCards from '../components/blog/BlogCards'
import Pagination from '../components/Pagination.jsx'

export const BlogsQuery = graphql`
    query blogListQuery($limit: Int!, $offset: Int!){
        allSanityBlog(
            sort: {fields: publishedAt, order: DESC}
            limit: $limit
            skip: $offset
        ) {
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

export default function BlogHome({ data, pageContext }) {

    const {currentPage, numberOfPages } = pageContext
    const blogs = data.allSanityBlog.nodes;

    return (
        <>
            <Seo title="Blogs"/>
            <section className="blogHome__container">
                <div className="blogHome__wrapper">
                    <div className="blog__header">
                        <h1>Our <span>Blogs</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sequi obcaecati qui voluptas quasi omnis, tempore nostrum officiis tempora quaerat iste officia quas</p>
                    </div>
                    <article className="blogCard__container">
                        <BlogCards blogs={blogs} />
                    </article>
                    {numberOfPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            numberOfPages={numberOfPages}
                            baseURL="/blogs"
                        />
                    )}
                </div>
            </section>
        </>
    )
}