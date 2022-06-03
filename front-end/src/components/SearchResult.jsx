import React from 'react'
import { useFlexSearch } from 'react-use-flexsearch'
import { BlogResultItems, CategoryResultItem, AuthorResultItem } from './SearchItems'
 
export default function SearchResult({
    searchQuery,
    blogsIndexStore,
    categoriesIndexStore,
    authorsIndexStore
}) {
    const blogsResult = useFlexSearch(
        searchQuery,
        JSON.stringify(blogsIndexStore.index),
        blogsIndexStore.store
    )
    const categoriesResult = useFlexSearch(
        searchQuery,
        JSON.stringify(categoriesIndexStore.index),
        categoriesIndexStore.store
    )
    const authorsResult = useFlexSearch(
        searchQuery,
        JSON.stringify(authorsIndexStore.index),
        authorsIndexStore.store
    )

    if (
        blogsResult.length === 0 &&
        categoriesResult.length === 0 &&
        authorsResult.length === 0
    ) {
        return <p>No Result Found.</p>
      }

    return (
        <>
            {blogsResult.length > 0 && (
                <>
                    <h2 className='search__header'>Blogs</h2>
                    {blogsResult.map((result) => (
                        <BlogResultItems
                            key={result.id}
                            blog={result}
                        />
                    ))}
                </>
            )}
            {categoriesResult.length > 0 && (
                <>
                    <h2 className='search__header'>Categories</h2>
                    {categoriesResult.map((result) => (
                        <CategoryResultItem 
                            key={result.id} 
                            category={result} 
                        />
                    ))}
                </>
            )}
            {authorsResult.length > 0 && (
                <>
                    <h2 className='search__header'>Authors</h2>
                    {authorsResult.map((result) => (
                        <AuthorResultItem 
                            key={result.id} 
                            author={result} 
                        />
                    ))}
                </>
            )}
        </>
    )
}
