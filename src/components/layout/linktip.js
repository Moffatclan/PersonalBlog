/** @jsx jsx */
import React, { forwardRef } from 'react'
import Tippy from '@tippyjs/react'
import { Styled, jsx } from 'theme-ui'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/themes/light.css'

const Linktip = forwardRef((props, ref) => {
  let placement
  let multiple
  if (props.placement) {
    placement = props.placement
  } else {
    placement = 'top'
  }
  if (props.multiple) {
    multiple = props.multiple
  } else {
    multiple = true
  }
  return (
    <Tippy
      duration="500"
      distance="10"
      theme="light"
      arrow={true}
      interactive={true}
      animation="shift-away"
      content={props.tiptext}
      placement={placement}
      multiple={multiple}
      sx={{
        padding: '0.2em',
        fontSize: '0.75em',
      }}>
      <div
        sx={{
          display: 'inline-block',
          lineHeight: '1em',
          transition: 'all 0.5s',
          '&:hover, &:focus': {
            color: 'text',
          },
        }}>
        <span ref={ref}>{props.children}</span>
      </div>
    </Tippy>
  )
})

const LinktipPreview = forwardRef((props, ref) => {
  let placement
  let multiple
  if (props.placement) {
    placement = props.placement
  } else {
    placement = 'top'
  }
  if (props.multiple) {
    multiple = props.multiple
  } else {
    multiple = true
  }
  return (
    <Tippy
      duration="500"
      distance="10"
      theme="light"
      arrow={true}
      interactive={true}
      animation="shift-away"
      content={props.tiptext}
      maxWidth={868}
      placement={placement}
      multiple={multiple}
      tag={'span'}
      sx={{
        padding: '0.2em',
        fontSize: '0.75em',
      }}>
      <span
        sx={{
          display: 'inline-block',
          lineHeight: '1em',
          transition: 'all 0.5s',
          '&:hover, &:focus': {
            color: 'text',
          },
        }}>
        <span ref={ref}>{props.children}</span>
      </span>
    </Tippy>
  )
})

export { Linktip, LinktipPreview }
