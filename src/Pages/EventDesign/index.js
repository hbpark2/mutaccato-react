import React from 'react'
import styled from 'styled-components'
import {eventDesing1, eventDesing2, eventDesing3} from '../../ImageData/eventDesignData'
import {FadeIn} from '../../Styles'
import {LightgalleryProvider, LightgalleryItem, useLightgallery} from 'react-lightgallery'
import LayerBox from '../../Components/LayerBox'

const Container = styled.main``

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
  font-size: 18px;
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

const Title = styled.h3``
const Description = styled.p``

const OpenGalleryBtn = styled.div`
  position: relative;
  z-index: 1;
  cursor: pointer;
  overflow: hidden;
`

const EventDesign = () => {
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
  const MakeList = ({title, data, type, desc}) => {
    return (
      <ListWrap>
        {(title === '2020 국립중앙도서관 [04.18]' || title === '2019 웹툰 체험형 전시회 그.리.다 [11.21 - 11.23]') && (
          <div>
            <Title>{title}</Title>
            <Description>{desc}</Description>
          </div>
        )}
        <List>
          <LightgalleryProvider>
            <div style={{display: 'none'}}>
              {data.map((p, idx) => (
                <PhotoItem key={idx} image={p} group={type} />
              ))}
            </div>
            <OpenButtonWithHook type={type} thumb={data[0]} />
          </LightgalleryProvider>
        </List>
        {title === '2019 윤리대전 [12.4]' && (
          <div>
            <Title>{title}</Title>
            <Description>{desc}</Description>
          </div>
        )}
      </ListWrap>
    )
  }
  const PhotoItem = ({image, thumb, group}) => (
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <img src={image} />
    </LightgalleryItem>
  )
  return (
    <Container>
      <MakeList title="2020 국립중앙도서관 [04.18]" data={eventDesing1.image} type="J" desc="- 5층 고문헌실 현관 디자인" />
      <MakeList title="2019 윤리대전 [12.4]" data={eventDesing2.image} type="L" desc="- 주최 및 주관 방송통신위원회. NIA 한국정보화진흥원" />
      <MakeList
        title="2019 웹툰 체험형 전시회 그.리.다 [11.21 - 11.23]"
        data={eventDesing3.image}
        type="M"
        desc="- 주최 및 주관
문화체육관광부. 한국만화영상진흥원. 강남구청.
충현복지재단. 충현복지관
- 후원 및 협찬
문화체육관광부. 한국만화영상진흥원. 강남구청.
에이원. 컬쳐솔루션"
      />
    </Container>
  )
}

export default EventDesign
