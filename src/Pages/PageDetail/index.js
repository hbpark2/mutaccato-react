import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router'
import styled from 'styled-components'
import Modal from '../../Components/Modal'
import {FadeIn, FadeInTopToBottom} from '../../Styles'
import {bannerData, foodData, furnitureData} from '../../ImageData/detailData'
import {LightgalleryProvider, LightgalleryItem, withLightgallery, useLightgallery} from 'react-lightgallery'

import 'lightgallery.js/dist/css/lightgallery.css'
import LayerBox from '../../Components/LayerBox'

const Container = styled.main``

const Tab = styled.ul`
  display: flex;
  width: 300px;
  padding: 65px 0;
  text-align: center;
  margin: 0 auto;
  li {
    &:first-child button {
      border: none;
    }
  }
  button {
  }
`
const TabBtn = styled.button`
  display: block;
  font-size: 16px;
  font-weight: 700;
  width: 100px;
  border-left: 1px solid #ababab;
  box-sizing: border-box;
  color: ${props => (props.tabState ? props.theme.keyDeepBlue : '#ababab')};
  &:hover {
    color: ${props => props.theme.keyDeepBlue};
  }
`

const ListWrap = styled.ul`
  display: grid;
  width: 95%;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
`

const List = styled.li`
  margin-bottom: 15px;
  position: relative;
  animation-name: ${FadeIn};
  animation-duration: ${props => props.randomDuration}s;
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

const BannerListWrap = styled.ul`
  width: 95%;
  margin: 0 auto;
  column-width: 350px;
  column-gap: 2%;
`

const ScrollModalInner = styled.div`
  img {
    width: 100%;
  }
`

const PageDetail = () => {
  const location = useLocation()
  const [tabState, setTabState] = useState('Furniture')
  const [modal, setModal] = useState(false)
  const [modalState, setModalState] = useState('')
  const [currentImage, setCurrentImage] = useState('')
  const [imageIndex, setImageIndex] = useState()

  const onTabStateChange = state => {
    setTabState(state)
  }

  const onListClick = (url, modalType, index) => {
    setCurrentImage(url)
    setModal(true)
    setModalState(modalType)

    if (modalType) {
      setModalState(modalType)
      setImageIndex(index)
    }

    document.body.style.overflow = 'hidden'
  }

  // const onNextPrevBtnClick = (type, data, index) => {
  //   if (type === 'next' && index < data.length - 1) {
  //     setCurrentImage(data[index + 1]?.thumbnail)
  //     setImageIndex(index + 1)
  //   }

  //   if (type === 'prev' && index > 1) {
  //     setCurrentImage(data[index - 1]?.thumbnail)
  //     setImageIndex(index - 1)
  //   }
  // }

  const onCloseModal = () => {
    setModal(false)
    document.body.style.overflow = 'unset'
  }

  useEffect(() => {
    setTabState(location?.state?.pageState)
  }, [location?.state?.pageState])

  const PhotoItem = ({image, thumb, group}) => (
    <List randomDuration={Math.random().toFixed(1) * 2}>
      <LightgalleryItem group={group} src={image} thumb={thumb}>
        <img src={image} />
      </LightgalleryItem>
      <LayerBox />
    </List>
  )

  return (
    <>
      <Container>
        <Tab>
          <li>
            <TabBtn tabState={tabState === 'Furniture'} onClick={() => onTabStateChange('Furniture')}>
              Furniture
            </TabBtn>
          </li>
          <li>
            <TabBtn tabState={tabState === 'Food'} onClick={() => onTabStateChange('Food')}>
              Food
            </TabBtn>
          </li>
          <li>
            <TabBtn tabState={tabState === 'Banner'} onClick={() => onTabStateChange('Banner')}>
              Banner
            </TabBtn>
          </li>
        </Tab>
        {tabState === 'Banner' ? (
          <LightgalleryProvider>
            <BannerListWrap>
              {bannerData.map((p, idx) => (
                <PhotoItem key={idx} image={p} group="bannerData" />
              ))}
            </BannerListWrap>
          </LightgalleryProvider>
        ) : (
          <ListWrap>
            {tabState === 'Furniture' &&
              furnitureData.map((item, index) => (
                <List key={index} randomDuration={Math.random().toFixed(1) * 2} onClick={() => onListClick(item.url)}>
                  <img src={item.thumbnail} />
                  <LayerBox />
                </List>
              ))}
            {tabState === 'Food' &&
              foodData.map((item, index) => (
                <List key={index} randomDuration={Math.random().toFixed(1) * 2} onClick={() => onListClick(item.url)}>
                  <img src={item.thumbnail} />
                  <LayerBox />
                </List>
              ))}
          </ListWrap>
        )}
      </Container>
      {modal && (
        <Modal onCloseModal={onCloseModal} modalType={modalState} data={bannerData} index={imageIndex}>
          <ScrollModalInner>
            <img src={currentImage} />
          </ScrollModalInner>
        </Modal>
      )}
    </>
  )
}

export default PageDetail
