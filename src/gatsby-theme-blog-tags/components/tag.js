import React from 'react'
import SEO from '../../components/seo'

import Layout from '../../components/layout'
import PostList from '../../components/post-list'

export default ({ data, pageContext, location }) => (
  <Layout
    title={'Articles on ' + pageContext.tag}
    titleTagName="h1"
    type="📚"
    location={location}>
    <PostList posts={data.allBlogPost.edges} />
  </Layout>
)
