import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import {albumcoverData} from '../../ImageData/alubumcoverData'
import {FadeIn} from '../../Styles'

const Container = styled.main``

const ListWrap = styled.ul`
  display: grid;
  width: 95%;
  margin: 0 auto;
  padding-top: 30px;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
`

const List = styled.li`
  margin-bottom: 15px;
  position: relative;
  animation-name: ${FadeIn};
  animation-duration: 0.5s;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  img {
    display: block;
    width: 100%;
    transition: all 0.5s;
  }
`
const LayerBox = styled.a`
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
const AlbumCover = () => {
  const goLink = link => {
    window.open(link, 'melon)', 'width=640,height=960')
    return false
  }
  return (
    <Container>
      <ListWrap>
        {albumcoverData.map((item, index) => (
          <List key={index}>
            <img src={item.url} />
            <LayerBox onClick={() => goLink(item.link)}>
              <FontAwesomeIcon icon={faSearch} color="#fff" />
            </LayerBox>
          </List>
        ))}
      </ListWrap>
    </Container>
  )
}

export default AlbumCover
