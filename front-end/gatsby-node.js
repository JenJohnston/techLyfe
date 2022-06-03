exports.createPages = async ({ graphql, actions}) => {

    const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE ) || 6

    const singleBlogTemplate = require.resolve('./src/templates/singleBlog.js')
    const blogHomeTemplate = require.resolve('./src/templates/blogHome.js')
    const singleCategoryTemplate = require.resolve('./src/templates/categorySingle.js')
    const categoryHomeTemplate = require.resolve('./src/templates/categoryHome.js')
    const singleAuthorTemplate = require.resolve('./src/templates/singleAuthor.js')
    const authorHomeTemplate = require.resolve('./src/templates/authorHome.js')

    const { createPage } = actions
    const result = await graphql(`
    {
        allSanityBlog {
            nodes {
              id
              slug {
                current
              }
            }
          }
        allSanityCategory {
          nodes {
            id
            slug {
              current
            }
          }
        }
        allSanityAuthor {
          nodes {
            id
            slug {
              current
            }
          }
        }
    }
    `)
    if (result.errors) throw result.errors

    const blogs = result.data.allSanityBlog.nodes
    const categories = result.data.allSanityCategory.nodes
    const authors = result.data.allSanityAuthor.nodes

    // single blogs pages
    blogs.forEach((blog) => {
        createPage({
            path: `/blogs/${blog.slug.current}`,
            component: singleBlogTemplate,
            context: { id: blog.id }
        })
    })

    // single category pages

    categories.forEach((category) => {
      createPage({
        path: `/categories/${category.slug.current}`,
        component: singleCategoryTemplate,
        context: { id: category.id }
      })
    })

    // single author pages

    authors.forEach((author) => {
      createPage({
        path: `/authors/${author.slug.current}`,
        component: singleAuthorTemplate,
        context: { id: author.id }
      })
    })

    // blog home page

    const totalBlogPages = Math.ceil(blogs.length / postsPerPage)
    Array.from({ length: totalBlogPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/blogs' : `/blogs/${index + 1}`,
        component: blogHomeTemplate,
        context: {
            limit: postsPerPage,
            offset: index * postsPerPage,
            numberOfPages: totalBlogPages,
            currentPage: index + 1,
        },
      })
    })

  // category home page

  const totalCategoryPages = Math.ceil(categories.length / postsPerPage)
  Array.from({ length: totalCategoryPages}).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/categories' : `/categories/${index + 1}`,
        component: categoryHomeTemplate,
        context: {
          limit: postsPerPage,
          offset: index * postsPerPage,
          numberOfPages: totalCategoryPages,
          currentPage: index + 1,
        },
      })
  })

  // author home page

  const totalAuthorPages = Math.ceil(authors.length / postsPerPage)
  Array.from({ length: totalAuthorPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/authors' : `/authors/${index + 1}`,
        component: authorHomeTemplate,
        context: {
          limit: postsPerPage,
          offset: index * postsPerPage,
          numberOfPages: totalAuthorPages,
          currentPage: index + 1,
        },
      })
  })


}