import styled from 'styled-components'

export const Container = styled.main``

export const ListWrap = styled.ul`
  display: grid;
  width: 95%;
  margin: 0 auto;
  padding-top: 30px;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
`

export const OpenGalleryBtn = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer;
  overflow: hidden;

  .react_lightgallery_item {
    width: 100%;
  }
  img {
    width: 100%;
  }
`

export const Image = styled.i`
  display: block;
  width: 100%;
  /* height: 600px; */
  padding-bottom: 100%;
  background: url(${props => props.bg}) no-repeat;
  background-size: contain;
  background-position: center center;
`
