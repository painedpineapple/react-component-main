import styled from 'react-emotion'

export default styled('div')(({ options: o }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',

  main: {
    flexGrow: 2,
  },

  ...o.styles,
}))
