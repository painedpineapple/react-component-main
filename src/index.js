import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'react-emotion'
import Main from './Main'

const HeaderStyled = styled('header')(() => ({
  background: '#000',
  color: '#fff',
}))

const FooterStyled = styled('footer')(() => ({
  background: '#000',
  color: '#fff',
}))

function Header() {
  return <HeaderStyled>This is my header</HeaderStyled>
}

function Footer() {
  return <FooterStyled>This is my footer</FooterStyled>
}

function App() {
  return (
    <Main header={Header} footer={Footer}>
      <div>
        <p>All my other content goes here...</p>

        <p>The Main component will have a min-height of 100vh</p>
        <p>the main html tag will flex to fill that width</p>
      </div>
    </Main>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
