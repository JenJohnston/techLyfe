import { graphql } from 'gatsby'
import React from 'react'
import AuthorCards from '../components/author/AuthorCards.jsx'
import Pagination from '../components/Pagination.jsx'
import Seo from '../components/Seo.jsx'

export const AuthorsQuery = graphql`
  query authorQuery($limit: Int!, $offset: Int!) {
    allSanityAuthor(limit: $limit, skip: $offset) {
      nodes {
        id
        name
        slug {
          current
        }
        profileImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default function AuthorHome({ data, pageContext }){

    const authors = data.allSanityAuthor.nodes;
    const { currentPage, numberOfPages } = pageContext;

    return (
        <>
        <Seo title="authors"/>
            <section className="authorHome__container">
                <div className="authorHome__wrapper">
                    <div className="section__header">
                        <h1>Our <span>Authors</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sequi obcaecati qui voluptas quasi omnis, tempore nostrum officiis tempora quaerat iste officia quas</p>
                    </div>
                    <div className="author__subheading">
                        <h2><span>Meet</span> Our Team</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sequi obcaecati qui voluptas quasi omnis, tempore nostrum officiis tempora quaerat iste officia quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sequi obcaecati qui voluptas quasi omnis, tempore nostrum officiis tempora quaerat iste officia quas</p>
                    </div>
                    <div className="authorCard__container">
                        <AuthorCards authors={authors} />
                    </div>
                    {numberOfPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            numberOfPages={numberOfPages}
                            baseURL="/authors"
                        />
                    )}
                </div>
            </section>
        </>
    )
}