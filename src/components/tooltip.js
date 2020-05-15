/** @jsx jsx */
import React, { forwardRef } from 'react'
import Tippy from '@tippyjs/react'
import { Styled, jsx } from 'theme-ui'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/themes/light.css'

const Tooltip = forwardRef((props, ref) => {
  return (
    <Tippy
      duration="500"
      distance="10"
      theme="light"
      arrow={true}
      interactive={true}
      animation="shift-away"
      content={props.tiptext}
      sx={{
        padding: '0.2em',
        fontSize: '0.75em',
      }}>
      <div
        sx={{
          display: 'inline-block',
          color: '#75B9BE',
          borderRadius: '4px',
          lineHeight: '1em',
          transition: 'all 0.5s',
          '&:hover, &:focus': {
            textDecoration: 'underline',
          },
        }}>
        <span ref={ref}>{props.children}</span>
      </div>
    </Tippy>
  )
})

export default Tooltip
