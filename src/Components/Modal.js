import styled from 'styled-components'
import {FadeIn} from '../Styles'

const ScrollModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 100vh;
  background-color: #fff;
  box-shadow: ${props => props.theme.shadow_2};
  border-radius: 5px;
  z-index: 30;
  overflow: scroll;
  animation-name: ${FadeIn};
  animation-duration: 1s;
`
const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
  animation-name: ${FadeIn};
  animation-duration: 1s;
`

const Modal = ({children, onCloseModal}) => {
  return (
    <>
      <ScrollModalContainer>{children}</ScrollModalContainer>
      <Layer onClick={onCloseModal} />
    </>
  )
}

export default Modal
