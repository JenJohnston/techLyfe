import React from 'react'
import AuthorItem from './AuthorItem';

export default function AuthorCards({ authors }) {
    

    return (
        <>
            {authors.map((item) => (
                <AuthorItem
                key={item.id}
                name={item.name}
                slug={item.slug}
                profileImage={item.profileImage}
                />
            ))}
        </>
    )
}
