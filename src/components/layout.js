/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

import Header from './header'

export default ({ children, title, description }) => (
  <Styled.root>
    <Header title={title} description={description} />
    <div
      sx={{
        maxWidth: 'container',
        px: [3, 4, 5],
      }}>
      <h1 sx={{ fontFamily: 'heading', fontWeight: 'heading' }}>{title}</h1>
      {children}
    </div>
  </Styled.root>
)
