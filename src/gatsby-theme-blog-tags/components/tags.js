import React from 'react'
import SEO from '../../components/seo'

import Layout from '../../components/layout'
import TagList from '../../components/tags/list'

export default ({ data, location }) => (
  <Layout
    title="Articles by Tags"
    titleTagName="h1"
    type="📚"
    location={location}>
    <TagList tags={data.allBlogPost.group} />
  </Layout>
)
