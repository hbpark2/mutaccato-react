import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import SwiperCore, {Navigation, Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import Banner1 from 'assets/img/banner/1.jpg'
import Banner2 from 'assets/img/banner/2.jpg'
import Banner3 from 'assets/img/banner/3.jpg'
import Banner4 from 'assets/img/banner/4.jpg'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
SwiperCore.use([Navigation, Pagination])

const Container = styled.article`
  & .swiper-container {
    width: 100%;
    height: 100%;
  }
  & .swiper-wrapper {
    padding-inline-start: 0;
  }

  & .swiper-slide {
    display: flex;
    align-items: center;
    overflow-y: scroll;
  }
  & .swiper-button-prev:after,
  .swiper-button-next:after {
    color: #333;
  }
  & .swiper-pagination-bullet-active {
    background-color: #333;
  }
`
const SwipeItem = styled.div`
  width: 100%;
  height: 800px;
  background: url(${props => props.background}) no-repeat;
  background-size: cover;
  background-position: center;

  span {
    display: block;
  }
`
const Main = () => {
  const mainSlideArr = [
    {
      title: '디자이너 김무경의 포트폴리오',
      sub_title: '시각적인 요소를 최고의 비주얼로 \n기획 디자인 마케팅',
      image: Banner1,
      url: '',
    },
    {title: '제품의 가치를 높이다', sub_title: '클라이언트와의 밀도있는 소통 \n상세페이지', image: Banner2, url: '/detail'},
    {title: '브랜드를 디자인하다', sub_title: '시선의 흐름과 포인트를 한번에 \n 룩북', image: Banner3, url: '/lookbook'},
    {title: '다양한 클라이언트와의 협업', sub_title: '클라이언트의 상상을 현실로 \n앨범 커버', image: Banner4, url: '/albumcover'},
  ]

  return (
    <Container id="content">
      <h2 className="hidden">CONTENT SECTION</h2>
      <Swiper navigation={true} spaceBetween={0} slidesPerView={1} pagination={{clickable: true}}>
        {mainSlideArr?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <SwipeItem background={item.image}>
                <h3>{item.title}</h3>
                <span>{item.sub_title}</span>
                <Link to={item.path}>READ MORE</Link>
              </SwipeItem>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default Main
