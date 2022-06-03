import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import { format } from 'date-fns';
import { ModalSearchContext } from '../context/modalSearchContext'
import { Link } from 'gatsby';

function BlogResultItems({blog}) {
    const { closeSearchModal } = useContext(ModalSearchContext);
    return (
        <Link
            to={`/blogs/${blog.slug.current}`}
            onClick={() => closeSearchModal()}
            className="blogSearch"
        >
            <GatsbyImage
                image={blog.coverImage.asset.gatsbyImageData}
                alt={blog.coverImage.alt}
                className="searchImg"
            />
            <div className="blogSearchContent">
                <h3>{blog.title}</h3>
                <p>
                {format(new Date(blog.publishedAt), 'p, MMMM dd, yyyy')}
                </p>
            </div>
        </Link>
    )
}

function CategoryResultItem({ category }) {
    const { closeSearchModal } = useContext(ModalSearchContext);
    return (
      <Link
        to={`/categories/${category.slug.current}`}
        onClick={() => closeSearchModal()}
        className="categorySearch"
      >
        <h3 className="title">{category.title}</h3>
      </Link>
    );
}

function AuthorResultItem({ author }) {
    const { closeSearchModal } = useContext(ModalSearchContext);
    return (
      <Link
        to={`/authors/${author.slug.current}`}
        onClick={() => closeSearchModal()}
        className="authorSearch"
      >
        <GatsbyImage
          image={author.profileImage.asset.gatsbyImageData}
          alt={author.profileImage.alt}
          className="authorProfileImg"
        />
        <h3 className="title">{author.name}</h3>
      </Link>
    );
}

export {
    BlogResultItems,
    CategoryResultItem,
    AuthorResultItem
}
