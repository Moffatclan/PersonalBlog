import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Audio from '../audio'
import { InternalLink } from '../layout/links'

import Layout from '../layout/layout'
import SimilarContent from '../similar-content'

export default function PageTemplate({ data: { mdx }, location }) {
  let recording = mdx.frontmatter.recording
  return (
    <Layout
      title={mdx.frontmatter.title}
      description={mdx.frontmatter.excerpt}
      type="Poem 📜"
      location={location}>
      <Audio src={recording} />
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <h3>
        <InternalLink to="/poetry/all">All Poems &rarr; </InternalLink>
      </h3>
      <SimilarContent
        title={mdx.frontmatter.title}
        tags={mdx.frontmatter.tags}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PoemQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        tags
        title
        excerpt
        recording
      }
    }
  }
`
