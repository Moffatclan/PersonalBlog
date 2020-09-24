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
import { Figure } from '../layout/figure'
import { Blockquote, Callout } from '../layout/TextStyles'
import { InternalLink, InternalNotesLink, ExternalLink } from '../layout/links'

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
      return <InternalNotesLink to={href}>{renderedLink}</InternalNotesLink>
    } else {
      return (
        <LinktipPreview
          link={true}
          tiptext={
            <MDXProvider components={components}>
              <h1>{popups[`${href}`].title}</h1>
              <MDXRenderer>{popups[`${href}`].body}</MDXRenderer>
            </MDXProvider>
          }
          placement="right"
          multiple={false}>
          <InternalNotesLink to={href}>{renderedLink}</InternalNotesLink>
        </LinktipPreview>
      )
    }
  } else if (isInternalLink) {
    if (isEmpty(popups[`${href}`])) {
      return <InternalLink to={href}>{renderedLink}</InternalLink>
    } else {
      return (
        <LinktipPreview
          link={true}
          tiptext={
            <MDXProvider components={components}>
              <h1>{popups[`${href}`].title}</h1>
              <MDXRenderer>{popups[`${href}`].body}</MDXRenderer>
            </MDXProvider>
          }
          placement="right"
          multiple={false}>
          <InternalLink to={href}>{renderedLink}</InternalLink>
        </LinktipPreview>
      )
    }
  } else {
    return (
      <ExternalLink href={href} {...restProps}>
        {renderedLink}
      </ExternalLink>
    )
  }
}

export default {
  a: AnchorTag,
  blockquote: Blockquote,
  img: (props) => <Figure {...props} />,
  Footnote: (props) => <Footnote {...props} />,
  Tooltip: (props) => <Tooltip {...props} />,
  Linktip: (props) => <Linktip {...props} />,
  Callout: (props) => <Callout {...props} />,
  Marginnote: (props) => <Marginnote {...props} />,
  Figure: (props) => <Figure {...props} />,
}
