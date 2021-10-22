import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
const Container = styled.i`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.5s;
  svg {
    font-size: 30px;
  }
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`
const LayerBox = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faSearch} color="#fff" />
    </Container>
  )
}

export default LayerBox
