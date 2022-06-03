import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { format } from 'date-fns'
import React from 'react'

export default function BlogItem({title, path, image, publishedAt, categories}) {
    return (
        <div className='card__container'>
            <Link to={`/blogs/${path}`}>
                <GatsbyImage
                    className='feature__img'
                    image={image.imageData}
                    alt={image.altText}
                />
            </Link>
            <Link  className='featureBlog__title' to={`/blogs/${path}`}>
                <h2>{title}</h2>
            </Link>
            {publishedAt && (
                <p className='featured__date'>{format(new Date(publishedAt), 'p, MMMM dd, yyyy')}</p>
            )}
            <p className='featured__categories'>
                {categories.map((item, index) => (
                    <span key={item.slug.current}>
                        <Link to={`/categories/${item.slug.current}`}>
                            {item.title}
                        </Link>
                        {index < categories.length - 1 ? ' | ' : ''}
                    </span>
                ))}
            </p>
        </div>
    )
}
