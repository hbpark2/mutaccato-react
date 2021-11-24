import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import Logo from 'assets/img/logo.jpg'
import DetailPageMenu from 'assets/img/banner/menu_detail.jpg'
import EventMenu from 'assets/img/banner/event_menu.jpg'
import LookBookMenu from 'assets/img/banner/menu_lookbook.jpg'
import InstaLogo from 'assets/img/insta.png'
import {Link} from 'react-router-dom'

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 130px;
  background-color: #fff;
  transition: opacity 0.5s, height 0.5s;
  overflow: hidden;

  ${({headerCurrent}) =>
    headerCurrent
      ? css`
          height: 400px;
          opacity: 1;
        `
      : css`
          height: 130px;
          opacity: 0.9;
        `}

  &:hover {
    border-bottom: 1px solid #ddd;
    opacity: 1;
  }
`

const LogoWrap = styled.h1`
  float: left;
  width: 15%;

  a {
    display: block;
    text-align: center;
  }

  img {
    width: 130px;
    margin: 0 auto;
  }
`

const NavButton = styled.button`
  display: none;

  @media screen and (max-width: 640px) {
    display: block;
    float: right;
    font-size: 24px;
    color: #333;
    padding: 40px 25px;
    transition: all 0.5s;
    border: none;
    background: none;
    outline: none;
    transform-origin: 50% 50%;
    transform: rotate(0deg);

    &:hover {
      color: #0b547a;
    }
  }
`

const Nav = styled.nav``

const Gnb = styled.ul`
  display: flex;
  width: 85%;
  overflow: hidden;
`

const NavList = styled.li`
  width: 13%;
  a {
    display: block;
    font-weight: 600;
    text-align: center;
    transition: all 0.5s;
    &:hover {
      color: ${({theme: {accentColor}}) => accentColor};
    }
  }
`
const NavListTItle = styled(Link)`
  border-bottom: 2px solid #eee;
  box-sizing: border-box;
  line-height: 130px;
  color: #000;
  font-weight: 700;
  &:hover {
    border-bottom: 2px solid #4a99c3;
    box-sizing: border-box;
  }
`

const DepthUl = styled.ul`
  position: absolute;
  width: 96%;
  padding: 0 2%;
  left: 0;
  text-indent: 20px;
  transition: all 0.5s;
  overflow: hidden;
  ${({headerCurrent}) =>
    headerCurrent
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
`

const DepthTitle = styled.li`
  width: 25%;
  height: 60px;
  line-height: 60px;
  font-size: 32px;
  text-align: center;
  font-weight: 600;
  padding: 3% 0;
`

const DepthCenter = styled.li`
  width: 25%;
  padding: 3% 0;
  a {
    text-align: left;
  }
`
const DepthCenterUl = styled.ul`
  li {
    height: 60px;
    line-height: 60px;
  }
`

const DepthImage = styled.li`
  width: 50%;
  img {
    display: block;
    width: 100%;
  }
`

const Insta = styled.a`
  position: absolute;
  top: 45px;
  right: 2%;
  display: block;
  width: 40px;
  height: 40px;
  img {
    width: 100%;
  }
`

const SLink = styled(Link)``

const NewHeader = () => {
  const [headerCurrent, setHeaderCurrent] = useState(false)
  const [depthCurrent, setDepthCurrent] = useState('')

  const onHeaderOpen = depthState => {
    setHeaderCurrent(true)
    setDepthCurrent(depthState)
  }

  return (
    <Container headerCurrent={headerCurrent}>
      <LogoWrap>
        <span className="hidden">MUTACCATO</span>
        <Link to="/">
          <img src={Logo} alt="mutaccatologo" />
        </Link>
      </LogoWrap>
      <Nav>
        <h2 className="hidden">GNB section</h2>
        <NavButton className="menu_btn">
          <i className="fas fa-bars" />
        </NavButton>
        <Gnb id="gnb">
          {navArr.map((item, index) => (
            <NavList
              className={item.class}
              key={`navItem${index}`}
              onMouseOver={() => item.children.length > 0 && onHeaderOpen(item.path)}
              onMouseOut={() => setHeaderCurrent(false)}
            >
              <NavListTItle to={{pathname: item.path, state: {pageState: item.pageState || ''}}}>{item.text}</NavListTItle>

              {item.children && (
                <DepthUl headerCurrent={depthCurrent === item.path}>
                  <DepthTitle>{item.text}</DepthTitle>

                  <DepthCenter>
                    <DepthCenterUl>
                      {item.children.map((cItem, cIndex) => (
                        <li key={`navChildren${cIndex}`}>
                          <Link to={{pathname: item.path, state: {pageState: cItem.pageState}}}>{cItem.text}</Link>
                        </li>
                      ))}
                    </DepthCenterUl>
                  </DepthCenter>

                  <DepthImage>
                    <img src={item.img} alt={item.alt} />
                  </DepthImage>
                </DepthUl>
              )}
            </NavList>
          ))}
        </Gnb>
      </Nav>

      <Insta href="https://www.instagram.com/mutaccato/" target="_black" className="go_insta">
        <img src={InstaLogo} alt="" />
      </Insta>
    </Container>
  )
}

const navArr = [
  {text: 'About M', path: '/about', class: 'depth_1', pageState: '', children: []},
  {
    text: 'Page Detail',
    path: '/page_detail',
    class: 'depth_1 depth_detail',
    pageState: 'Furniture',
    children: [
      {text: 'Furniture', path: '/page_detail', class: 'depth_2', pageState: 'Furniture'},
      {text: 'Food', path: '/page_detail', class: 'depth_2', pageState: 'Food'},
      {text: 'Pop-up(Banner)', path: '/page_detail', class: 'depth_2', pageState: 'Banner'},
    ],
    img: DetailPageMenu,
    alt: '',
  },
  {
    text: 'Lookbook',
    path: '/look_book',
    class: 'depth_1 depth_lookbook',
    pageState: '2018SS',
    children: [
      {text: '2018.s/s', path: '/look_book', class: 'depth_2', pageState: '2018SS'},
      {text: '2018.f/w', path: '/look_book', class: 'depth_2', pageState: '2018FW'},
      {text: '2019.s/s', path: '/look_book', class: 'depth_2', pageState: '2019SS'},
    ],
    img: LookBookMenu,
    alt: '',
  },
  {text: 'Album Cover', path: '/albumcover', class: 'depth_1', pageState: '', children: []},
  {
    text: 'Event Design',
    path: '/event_design',
    class: 'depth_1 depth_eventdesign',
    pageState: '',
    children: [
      {text: '국립중앙도서관', path: '/event_design', class: 'depth_2', pageState: ''},
      {text: '정보진흥원', path: '/event_design', class: 'depth_2', pageState: ''},
      {text: '충현복지관', path: '/event_design', class: 'depth_2', pageState: ''},
    ],
    img: EventMenu,
    alt: '',
  },
  {text: 'Package Design', path: '/package_design', class: 'depth_1', pageState: '', children: []},
  {text: 'Persnal Works', path: '/personal_works', class: 'depth_1', pageState: '', children: []},
]

export default NewHeader
