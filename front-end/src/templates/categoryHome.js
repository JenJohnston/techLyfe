import { graphql } from 'gatsby'
import React from 'react'

import Pagination from '../components/Pagination'
import Seo from '../components/Seo.jsx'
import TopCategoryItems from '../components/category/TopCategoryItems.jsx'

export const CategoryListQuery = graphql`
    query categoriesQuery($limit: Int!, $offset: Int!){
        allSanityCategory(
            sort: { fields: _createdAt, order: DESC }
            limit: $limit
            skip: $offset
        ) {
            nodes {
                id
                title
                slug {
                    current
                }
                _rawDescription
            }
        }
    }
`

export default function CategoryHome({data, pageContext}){

    const {currentPage, numberOfPages } = pageContext
    const categories = data.allSanityCategory.nodes

    return(
        <>
            <Seo title="Categories"/>
            <section className="categoriesHome__container">
                <div className="categoriesHome__wrapper">
                    <div className="categories__header">
                        <h1>Our <span>Categories</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nostrum debitis animi non! Nam, perspiciatis maxime? Impedit expedita odit dignissimos maxime. Autem dolores dolore pariatur obcaecati neque ipsum rem maxime.</p>
                    </div>
                    <div className="categoriesCard__container">
                        <TopCategoryItems categories={categories} />
                    </div>
                    {numberOfPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            numberOfPages={numberOfPages}
                            baseURL="/categories"
                        />
                    )}
                </div>
            </section>
        </>
    )
}