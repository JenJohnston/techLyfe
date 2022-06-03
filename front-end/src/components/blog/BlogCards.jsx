import React from 'react'
import BlogItem from './BlogItem'

export default function BlogCards({blogs}) {
    

    return (
        <>
          {blogs && blogs.map(blog => 
                <BlogItem
                    title={blog.title}
                    path={blog.slug.current}
                    key={blog.id}
                    categories={blog.categories}
                    image={{
                        imageData: blog.coverImage.asset.gatsbyImageData,
                        altText: blog.coverImage.alt,
                    }}
                    publishedAt={blog.publishedAt}
                />)}  
        </>
    )
}
