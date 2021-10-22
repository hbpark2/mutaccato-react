import React from 'react'
import styled from 'styled-components'
import ProfileImg from 'assets/img/profile.jpg'
import BannerImg from 'assets/img/about_1.jpg'
import ContactImg from 'assets/img/about_2.jpg'
const Container = styled.main``

const VisualSection = styled.section`
  width: 100%;
  height: 500px;
  background-color: #aaa;
  background: url(${BannerImg}) no-repeat;
  background-size: cover;
  background-position: center;
`

const MainParagraph = styled.section`
  width: 100%;
  /* background: rgb(154, 183, 197, 0.5); */
  text-align: center;
  padding: 50px 0;
  margin: 50px 0;
  line-height: 2em;
  font-size: 32px;
  font-weight: 500;
  span {
    display: block;
  }

  .font_box {
    width: 200px;
    padding: 10px;
    margin: 0 auto;
  }

  .line {
    width: 2px;
    height: 100px;
    margin: 30px auto;
    background-color: #333;
  }

  .sub_tit {
    margin: 50px 0;
    font-weight: 600;
    font-size: 28px;
  }

  .sub_desc {
    font-size: 28px;
  }
  .desc {
    font-size: 26px;
    line-height: 1.5em;
  }
`

const AboutSection = styled.section`
  margin-bottom: 100px;
`
const AboustSectionUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  padding: 50px 0 100px;
  li {
    display: flex;
    align-items: center;
    width: 48%;
    height: 500px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 1024px) {
    display: block;
    width: 100%;
    li {
      width: 100%;
      height: auto;
    }
  }
`

const AboutRightList = styled.li`
  background-color: #fafafa;
  span {
    display: block;
  }

  div {
    width: 90%;
    height: 90%;
    margin: auto;
    margin-top: 3.5%;
    padding: 10px;
    .name-span {
      font-size: 22px;
      font-weight: 600;
      padding: 20px 0;
    }
    dt {
      font-size: 18px;
      font-weight: 600;
      padding: 20px 0;
    }
    dd span {
      font-size: 18px;
      margin: 5px 0;
    }
  }
`
const Contact = styled.section`
  width: 80%;
  height: 500px;
  margin: 50px auto;
  background-color: salmon;
  background: url(${ContactImg}) no-repeat;
  background-size: cover;

  div {
    position: relative;
    float: right;
    top: 100px;
    right: 30px;
    width: 30%;
  }

  ul {
    width: 90%;
    margin: 0 auto;
  }

  ul li {
    padding: 20px 0;
    font-size: 22px;
    font-weight: 600;
  }

  .font_box {
    border-color: #333;
    display: block;
    width: 200px;
    height: 40px;
    line-height: 40px;
    margin: 20px 0;
    margin-left: 5%;
    font-size: 22px;
  }

  .font_box:hover {
    background-color: #333;
    color: #fff;
  }
`

const About = () => {
  return (
    <Container>
      <h2 className="hidden">About Page</h2>
      <VisualSection />
      <MainParagraph>
        <span className="font_box"> WHO AM I </span>
        <span className="sub_tit">I'll consider everything you say and do my best</span>
        <span className="sub_desc">클라이언트가 원하는 디자인을 위해 귀 기울이겠습니다.</span>
        <span className="line"></span>
        <p className="desc">
          이런 디자이너가 되겠습니다.
          <br /> 첫째, 항상 도전을 두려워하지 않고 새로운 것들을 배워나가겠다는 자세를 갖는 디자이너가 되겠습니다.
          <br />
          둘째, 현실에 안주하지 않는 성장하는 디자이너가 되겠습니다.
          <br />
          셋째, 팀원과 화합하는 디자이너가 되겠습니다.
        </p>
      </MainParagraph>
      <AboutSection>
        <AboustSectionUl>
          <li>
            <img src={ProfileImg} alt="profileImg" />
          </li>
          <AboutRightList>
            <div>
              <span className="name-span">김무경</span>
              <dl>
                <dt>CERTIFICATE</dt>
                <dd>
                  <span>2017.10.13 GTQ인디자인1급 한국생산성본부</span>
                  <span>2017.09.29 전자출판기능사 한국산업인력공단</span>
                  <span>2017.07.14 GTQ 1급 한국생산성본부</span>
                  <span>2017.06.23 컴퓨터그래픽스운용기능사 한국산업인력공단</span>
                  <span>2017.05.12 GTQ일러스트1급 한국생산성본부</span>
                </dd>
              </dl>
              <dl>
                <dt>EDUCATION</dt>
                <dd>
                  <span>2017 [NCS]창의적광고디자인 취업자 과정</span>
                  <span>2017 공주대학교 게임디자인학과 졸업</span>
                </dd>
              </dl>
            </div>
          </AboutRightList>
        </AboustSectionUl>
      </AboutSection>
      <Contact>
        <div>
          <span className="font_box">CONTACT</span>
          <ul>
            <li>T. 010-3002-5656</li>
            <li>E. mutaccato@gmail.com</li>
            <li>INSTAGRAM. @mutaccato</li>
          </ul>
        </div>
      </Contact>
    </Container>
  )
}

export default About
