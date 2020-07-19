/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import { isString, isEmpty } from 'lodash'
import { Link } from 'gatsby'
import Linktip from '../layout/linktip'
import LinktipPreview from '../layout/linktip-preview'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import components from '../layout/mdx-components'
import { MDXProvider } from '@mdx-js/react'
import Tooltip from '../layout/tooltip'
import { Footnote, Marginnote } from '../layout/sidenote'
import { Callout } from '../layout/TextStyles'

const INTERNAL_LINK_REGEX = /^\/notes/g
const INTERNAL_NON_NOTES_LINK_REGEX = /^\/(?!notes)/g
const AnchorTag = ({ href, popups = {}, ...restProps }) => {
  const isInternalNotesLink = !isEmpty(href.match(INTERNAL_LINK_REGEX))
  const isInternalLink = !isEmpty(href.match(INTERNAL_NON_NOTES_LINK_REGEX))
  let renderedLink = restProps.children
  if (isString(restProps.children)) {
    renderedLink = restProps.children.replace(/\[\[(.*?)\]\]/g, '$1')
  }
  if (isInternalNotesLink) {
    if (isEmpty(popups[`${href}`])) {
      return (
        <Styled.a
          as={Link}
          to={href}
          sx={{
            bg: 'lightblue',
            textDecoration: 'none',
            '&:hover,&:focus': {
              color: 'text',
              bg: 'white',
              textDecoration: 'underline',
              textDecorationColor: 'lightblue',
            },
          }}>
          {renderedLink}
        </Styled.a>
      )
    } else {
      return (
        <LinktipPreview
          link={true}
          tiptext={
            <MDXProvider components={components}>
              <Styled.h1>{popups[`${href}`].title}</Styled.h1>
              <MDXRenderer>{popups[`${href}`].body}</MDXRenderer>
            </MDXProvider>
          }
          placement="right"
          multiple={false}>
          <Styled.a
            as={Link}
            to={href}
            sx={{
              bg: 'lightblue',
              textDecoration: 'none',
              '&:hover,&:focus': {
                color: 'text',
                bg: 'white',
                textDecoration: 'underline',
                textDecorationColor: 'lightblue',
              },
            }}>
            {renderedLink}
          </Styled.a>
        </LinktipPreview>
      )
    }
  } else if (isInternalLink) {
    if (isEmpty(popups[`${href}`])) {
      return (
        <Styled.a as={Link} to={href}>
          {renderedLink}
        </Styled.a>
      )
    } else {
      return (
        <LinktipPreview
          link={true}
          tiptext={
            <MDXProvider components={components}>
              <Styled.h1>{popups[`${href}`].title}</Styled.h1>
              <MDXRenderer>{popups[`${href}`].body}</MDXRenderer>
            </MDXProvider>
          }
          placement="right"
          multiple={false}>
          <Styled.a as={Link} to={href}>
            {renderedLink}
          </Styled.a>
        </LinktipPreview>
      )
    }
  } else {
    return (
      <Styled.a
        sx={{
          textDecoration: 'underline',
          textDecorationColor: '#925C77',
          '&:hover': {
            color: 'text',
            textDecorationColor: '#2E0219',
          },
        }}
        href={href}
        {...restProps}>
        {renderedLink}
      </Styled.a>
    )
  }
}

export default {
  a: AnchorTag,
  Footnote: (props) => <Footnote {...props} />,
  Tooltip: (props) => <Tooltip {...props} />,
  Linktip: (props) => <Linktip {...props} />,
  Callout: (props) => <Callout {...props} />,
  Marginnote: (props) => <Marginnote {...props} />,
}
