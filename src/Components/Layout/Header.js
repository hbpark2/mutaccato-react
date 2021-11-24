import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Logo from 'assets/img/logo.jpg'
import DetailPageMenu from 'assets/img/banner/menu_detail.jpg'
import EventMenu from 'assets/img/banner/event_menu.jpg'
import LookBookMenu from 'assets/img/banner/menu_lookbook.jpg'
import InstaLogo from 'assets/img/insta.png'
import {Link} from 'react-router-dom'

const Container = styled.header``

const NavList = styled.li``

const DepthUl = styled.ul``

const SLink = styled(Link)``

const Header = () => {
  const [headerCurrent, setHeaderCurrent] = useState(false)

  useEffect(() => {
    const headerBox = document.querySelector('header')
    const trigerDetailDepth = document.querySelector('.depth_detail')
    const trigerDetailLookbook = document.querySelector('.depth_lookbook')
    const trigerDetailEvent = document.querySelector('.depth_eventdesign')

    const targetDetailDepth = document.querySelector('.depth_detail > ul')
    const targetDetailLookbook = document.querySelector('.depth_lookbook > ul')
    const targetDetailEvent = document.querySelector('.depth_eventdesign > ul')

    const article = document.getElementById('content')

    const menuBtn = document.querySelector('.menu_btn')
    const gnb = document.getElementById('gnb')

    if (window.innerWidth > 1024) {
      headerBox?.addEventListener('mouseover', () => {
        if (article?.style) {
          article.style.filter = 'grayscale(95%)'
        }
      })
      headerBox?.addEventListener('mouseout', () => {
        if (article?.style) {
          article.style.filter = 'none'
        }
      })

      if (trigerDetailDepth) {
        //상세페이지
        trigerDetailDepth?.addEventListener('mouseover', () => {
          targetDetailDepth.style.display = 'block'
          targetDetailDepth.style.opacity = 1
          headerBox.style.height = 400 + 'px'
          headerBox.style.opacity = 1
        })

        targetDetailDepth.addEventListener('mouseover', () => {
          targetDetailDepth.previousElementSibling.style.borderBottom = '2px solid #4a99c3'
          targetDetailDepth.previousElementSibling.style.color = '#0b547a'
        })

        targetDetailDepth.addEventListener('mouseout', () => {
          targetDetailDepth.previousElementSibling.style.borderBottom = ''
          targetDetailDepth.previousElementSibling.style.color = '#333'
        })

        trigerDetailDepth.addEventListener('mouseout', () => {
          targetDetailDepth.style.display = 'none'
          headerBox.style.height = 130 + 'px'
          headerBox.style.opacity = 0.9
        })

        //룩북
        trigerDetailLookbook.addEventListener('mouseover', () => {
          targetDetailLookbook.style.display = 'block'
          targetDetailLookbook.style.opacity = 1
          headerBox.style.height = 400 + 'px'
          headerBox.style.opacity = 1
        })

        targetDetailLookbook.addEventListener('mouseover', () => {
          targetDetailLookbook.previousElementSibling.style.borderBottom = '2px solid #4a99c3'
          targetDetailLookbook.previousElementSibling.style.color = '#0b547a'
        })

        targetDetailLookbook.addEventListener('mouseout', () => {
          targetDetailLookbook.previousElementSibling.style.borderBottom = ''
          targetDetailLookbook.previousElementSibling.style.color = '#333'
        })

        trigerDetailLookbook.addEventListener('mouseout', () => {
          targetDetailLookbook.style.display = 'none'
          headerBox.style.height = 130 + 'px'
          headerBox.style.opacity = 0.9
        })

        //이벤트
        trigerDetailEvent.addEventListener('mouseover', () => {
          targetDetailEvent.style.display = 'block'
          targetDetailEvent.style.opacity = 1
          headerBox.style.height = 400 + 'px'
          headerBox.style.opacity = 1
        })

        targetDetailEvent.addEventListener('mouseover', () => {
          targetDetailEvent.previousElementSibling.style.borderBottom = '2px solid #4a99c3'
          targetDetailEvent.previousElementSibling.style.color = '#0b547a'
        })

        targetDetailEvent.addEventListener('mouseout', () => {
          targetDetailEvent.previousElementSibling.style.borderBottom = ''
          targetDetailEvent.previousElementSibling.style.color = '#333'
        })

        trigerDetailEvent.addEventListener('mouseout', () => {
          targetDetailEvent.style.display = 'none'
          headerBox.style.height = 130 + 'px'
          headerBox.style.opacity = 0.9
        })
      }
    } else {
      // max-width 1024px, 태블릿, 모바일
      let moving = true
      if (gnb?.style && article?.style) {
        gnb.style.height = window.innerHeight + 'px'

        menuBtn?.addEventListener('click', () => {
          if (moving) {
            menuBtn.style.transform = 'rotate(360deg)'
            moving = false
          } else {
            menuBtn.style.transform = 'rotate(0deg)'
            moving = true
          }

          if (gnb.style.opacity == '1') {
            gnb.style.opacity = '0'
            gnb.style.right = '-200%'
            article.style.filter = 'blur(0px)'
          } else {
            gnb.style.opacity = '1'
            gnb.style.right = '0'
            article.style.filter = 'blur(15px)'
          }
        })
      }
    }
  }, [])

  return (
    <Container headerCurrent={headerCurrent}>
      <h1 className="logo">
        <span className="hidden">MUTACCATO</span>
        <Link to="/">
          <img src={Logo} alt="mutaccatologo" />
        </Link>
      </h1>
      <nav>
        <h2 className="hidden">GNB section</h2>
        <button href="#" className="menu_btn">
          <i className="fas fa-bars"></i>
        </button>
        <ul id="gnb">
          {navArr.map((item, index) => (
            <NavList className={item.class} key={`navItem${index}`}>
              <Link to={{pathname: item.path, state: {pageState: item.pageState || ''}}}>{item.text}</Link>

              {item.children && (
                <DepthUl className="depth_detail_box">
                  <li className="tit">{item.text}</li>

                  <li className="menu_detail">
                    <ul className="depth_2_box">
                      {item.children.map((cItem, cIndex) => (
                        <li className={cItem.class} key={`navChildren${cIndex}`}>
                          <Link to={{pathname: item.path, state: {pageState: cItem.pageState}}}>{cItem.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="menu_img">
                    <img src={item.img} alt={item.alt} />
                  </li>
                </DepthUl>
              )}
            </NavList>
          ))}
        </ul>
      </nav>
      <a href="https://www.instagram.com/mutaccato/" target="_black" className="go_insta">
        <img src={InstaLogo} alt="" />
      </a>
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
      {text: '2018.f/w', path: '/look_book', class: 'depth_2', pageState: '2019FW'},
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

export default Header
