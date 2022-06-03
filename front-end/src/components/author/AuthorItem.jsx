import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export default function AuthorItem({ name, slug, profileImage }) {
    

    return (
        <Link to={slug.current} className="author__profile">
            <GatsbyImage
                image={profileImage.asset.gatsbyImageData}
                alt={profileImage.alt}
                className="profileImage"
            />
            <div className="authorCard__Content">
                <h2>{name}</h2>
            </div>
        </Link>
    )
}
