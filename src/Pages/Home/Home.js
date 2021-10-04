import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import Banner1 from 'assets/img/banner/1.jpg'
import Banner2 from 'assets/img/banner/2.jpg'
import Banner3 from 'assets/img/banner/3.jpg'
import Banner4 from 'assets/img/banner/4.jpg'
import ShortCut1 from 'assets/img/m_1.jpg'
import ShortCut2 from 'assets/img/m_2.jpg'
import ShortCut3 from 'assets/img/m_3.jpg'

import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination} from 'swiper'
SwiperCore.use([Navigation, Pagination])
import 'swiper/swiper-bundle.css'

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

  & .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    background-color: #fff;
  }

  & .swiper-pagination-bullet-active {
    background-color: #4a99c3;
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

const SwiperInener = styled.div`
  position: relative;
  top: 200px;
  width: 60%;
  margin: 0 auto;
  text-align: center;
  padding: 50px 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);

  h3 {
    font-size: 56px;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
    padding: 20px 0;
    line-height: 1.5em;
  }

  span {
    display: block;
    font-size: 26px;
    text-align: center;
    padding: 20px 0;
  }

  a {
    display: block;
    width: 200px;
    margin: 10px auto;
    border: 1px solid #fff;
    border-radius: 50px;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    padding: 15px 0;
    color: #fff;
    transition: all 0.5s;
  }

  a:hover {
    color: ${props => props.theme.keyBlue};
    background-color: #fff;
  }
`

const IntroTextWrap = styled.div`
  width: 100%;
  text-align: center;
  padding: 50px 0;
  margin: 50px 0 25px;
  line-height: 2em;
  font-size: 28px;
  font-weight: 500;
  span {
    display: block;
    margin: 0 auto;
    &:first-child {
      font-size: 32px;
    }
  }
  .middle_text {
    margin: 50px auto;
  }
`

const FontBox = styled.span`
  display: block;
  width: 200px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid ${props => props.theme.keyBlue};
`

const ShortCutWrap = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  a {
    display: block;
  }
  img {
    display: block;
    width: 80%;
    margin: 0 auto;
  }
  span {
    display: block;
    margin: 30px auto;
    text-align: center;
  }
`

const Home = () => {
  const mainSlideArr = [
    {
      title: '김무경의 포트폴리오',
      sub_title: '시각적인 요소를 한눈에 \n기획 디자인',
      image: Banner1,
      url: '',
    },
    {title: '제품의 가치를 높이다', sub_title: '클라이언트와의 밀도있는 소통 \n상세페이지', image: Banner2, url: '/detail'},
    {title: '브랜드를 디자인하다', sub_title: '시선의 흐름과 포인트를 한번에 \n 룩북', image: Banner3, url: '/lookbook'},
    {title: '다양한 클라이언트와의 협업', sub_title: '클라이언트의 상상을 현실로 \n앨범 커버', image: Banner4, url: '/albumcover'},
  ]

  mainSlideArr.map(item => {
    return item.sub_title.replace(/\n/gi, '\\r\\n')
  })

  console.log(mainSlideArr.sub_title)
  return (
    <Container id="content">
      <h2 className="hidden">CONTENT SECTION</h2>
      <Swiper spaceBetween={0} slidesPerView={1} pagination={{clickable: true}}>
        {mainSlideArr?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <SwipeItem background={item.image}>
                <SwiperInener>
                  <h3>{item.title}</h3>
                  {item.sub_title.split('\n').map((line, index) => {
                    let makeSpanKey = `line${index}`
                    return (
                      <span key={makeSpanKey}>
                        {line}
                        <br />
                      </span>
                    )
                  })}
                  <Link to={item.url}>READ MORE</Link>
                </SwiperInener>
              </SwipeItem>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <IntroTextWrap>
        <FontBox>WHO AM I</FontBox>
        <span className="middle_text">I'll consider everything you say and do my best</span>
        <span>클라이언트가 원하는 디자인을 위해 귀 기울이겠습니다.</span>
      </IntroTextWrap>
      <ShortCutWrap>
        <li>
          <Link to="/page_detail">
            <img src={ShortCut1} alt="shortcut img" />
            <span>Page Detail</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={ShortCut2} alt="shortcut img" />
            <span>Look Book</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={ShortCut3} alt="shortcut img" />
            <span>Album Cover</span>
          </Link>
        </li>
      </ShortCutWrap>
    </Container>
  )
}

export default Home
