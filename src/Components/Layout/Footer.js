import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  width: auto;
  padding: 90px;
  background: #f1f1f1;
  text-align: center;
  box-sizing: border-box;

  .copyright_txt {
    font-weight: 600;
    line-height: 2em;
  }
`

const Footer = () => {
  return <Container></Container>
}

export default Footer
