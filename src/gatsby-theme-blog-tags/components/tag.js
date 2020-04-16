import React from 'react'
import SEO from '../../components/seo'

import Layout from '../../components/layout'
import PostList from '../../components/post-list'

export default ({ data, pageContext }) => (
  <Layout title={'Articles on ' + pageContext.tag} titleTagName="h1">
    <SEO title={'Articles on ' + pageContext.tag} />
    <PostList posts={data.allBlogPost.edges} />
  </Layout>
)
