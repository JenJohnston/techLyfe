// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document import

import blog from './documents/blog.js'
import category from './documents/category'
import author from './documents/author.js'
import featured from './documents/featured.js'

// object import

import customImage from './objects/customImage'
import normalText from './objects/normalText'
import richText from './objects/richText.js'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

      // document schemas
      featured,
      blog,
      author,
      category,
      
      // object schemas

      customImage,
      normalText,
      richText

  ])
  
})
