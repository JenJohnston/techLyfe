import React from 'react'
import CategoryItem from './CategoryItem'

export default function TopCategoryItems({categories}) {
    

    return (
        <>
            {categories.map(item => (
                <CategoryItem
                    key={item.id}
                    title={item.title}
                    description={item._rawDescription}
                    slug={item.slug}
                />
            ))}
        </>
    )
}
