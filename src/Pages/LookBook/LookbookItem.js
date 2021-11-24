import React from 'react'
import styled from 'styled-components'
import {LightgalleryProvider, LightgalleryItem, useLightgallery} from 'react-lightgallery'

import 'lightgallery.js/dist/css/lightgallery.css'
import LayerBox from '../../Components/Common/LayerBox'
import {FadeIn} from '../../Styles'

const ListWrap = styled.ul`
  display: flex;
  width: 95%;
  margin: 100px auto;
  animation-name: ${FadeIn};
  animation-duration: 1s;
`
const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-size: 38px;
  font-weight: 600;
  transition: all 0.5s;

  img {
    width: 100%;
    transition: all 0.5s;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`

const OpenGalleryBtn = styled.div`
  position: relative;
  z-index: 1;
  cursor: pointer;
  overflow: hidden;
`

const LookbookItem = ({lbData}) => {
  const OpenButtonWithHook = ({type, thumb, className}) => {
    const {openGallery} = useLightgallery()
    return (
      <>
        <OpenGalleryBtn onClick={() => openGallery(type)} className={['button is-primary', className || ''].join(' ')}>
          <img src={thumb} />
          <LayerBox />
        </OpenGalleryBtn>
      </>
    )
  }

  const PhotoItem = ({image, thumb, group}) => (
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <img src={image} />
    </LightgalleryItem>
  )

  const MakeList = ({title, data, type}) => {
    return (
      <ListWrap>
        {(title === "J'AIMEBLANC" || title === 'mmaker') && <List>{title}</List>}
        <List>
          <LightgalleryProvider>
            <div style={{display: 'none'}}>
              {data.map((p, idx) => (
                <PhotoItem key={idx} image={p} group={type} />
              ))}
            </div>
            <OpenButtonWithHook type={type} thumb={data[1]} />
          </LightgalleryProvider>
        </List>
        {(title === 'LEGACYBONE' || title === 'viewy') && <List>{title}</List>}
      </ListWrap>
    )
  }
  
  return (
    <>
      <MakeList title="J'AIMEBLANC" data={lbData.J} type="J" />
      <MakeList title="LEGACYBONE" data={lbData.L} type="L" />
      <MakeList title="mmaker" data={lbData.M} type="M" />
      <MakeList title="viewy" data={lbData.V} type="V" />
    </>
  )
}

export default LookbookItem
