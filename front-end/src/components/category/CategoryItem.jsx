import { Link } from 'gatsby'
import React from 'react'
import CatPortableText from '../CatPortableText'

export default function CategoryItem({title, description, slug}) {
    
    return (
        <div className='categoryCard'>
            <h2>{title}</h2>
            <div className="category__description">
                <CatPortableText value={description}/>
            </div>
            <Link to={`/categories/${slug.current}`}>Discover</Link>
        </div>
    )
}
