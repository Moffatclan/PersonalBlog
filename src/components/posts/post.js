/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Tooltip from '../layout/tooltip'
import Layout from '../layout/layout'
import { graphql } from 'gatsby'

export default ({ data, pageContext, location }) => {
  const wordCount = data.mdx.wordCount.words
  let emoji
  if (wordCount < 500) {
    emoji = '📄'
  } else if (wordCount < 1000) {
    emoji = '📄📄'
  } else if (wordCount < 1500) {
    emoji = '📄📄📄'
  } else if (wordCount < 2000) {
    emoji = '📄📄📄📄'
  } else if (wordCount < 2500) {
    emoji = '📄📄📄📄📄'
  } else {
    emoji = '📄📄📄📄📄📄'
  }

  return (
    <Layout
      title={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.excerpt}
      type="Article 📄"
      location={location}>
      <Tooltip tiptext={`${data.mdx.wordCount.words} words`}>{emoji}</Tooltip>
      <br />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        excerpt
      }
      timeToRead
      wordCount {
        words
      }
    }
  }
`
