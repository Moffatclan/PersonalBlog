/** @jsx jsx */
import { Link } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import { InternalLink } from '../../layout/links'
import { PostLink } from '../../posts/post-link'

export default ({ tag, tagCount }) => {
  const slug = tag
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
  return (
    <PostLink>
      <InternalLink to={'/poetry/tag/' + slug}>{tag}</InternalLink> ({tagCount})
    </PostLink>
  )
}
