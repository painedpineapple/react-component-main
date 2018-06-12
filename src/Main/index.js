// @flow
import * as React from 'react'
//
import Container from './index.style'

export default function Main(props: {
  header: () => any,
  footer: () => any,
  children: any,
  options?: {},
  mainAttrs: {},
}) {
  const { header, footer, options: opt, mainAttrs, children, ...attrs } = props

  const options = opt || {}

  return (
    <Container
      {...attrs}
      options={{
        ...options,
        styles: options.styles || {},
      }}
    >
      {header()}
      <main {...mainAttrs}>{children}</main>
      {footer()}
    </Container>
  )
}
