import React, {useEffect} from 'react'
import styled from 'styled-components'
import Logo from 'assets/img/logo.jpg'
import DetailPageMenu from 'assets/img/banner/menu_detail.jpg'
import EventMenu from 'assets/img/banner/event_menu.jpg'
import LookBookMenu from 'assets/img/banner/menu_lookbook.jpg'
import InstaLogo from 'assets/img/insta.png'

const Container = styled.header``

const Header = () => {
  useEffect(() => {
    const headerBox = document.querySelector('header')
    const trigerDetailDepth = document.querySelector('.depth_detail')
    const trigerDetailLookbook = document.querySelector('.depth_lookbook')

    const targetDetailDepth = document.querySelector('.depth_detail > ul')
    const targetDetailLookbook = document.querySelector('.depth_lookbook > ul')

    const article = document.getElementById('content')
    let menuDetail = document.querySelectorAll('.menu_detail')

    const menuBtn = document.querySelector('.menu_btn')
    const gnb = document.getElementById('gnb')
    const goPagedetail = document.querySelector('.go_detail')
    // goPagedetail.addEventListener("click", () => (location.href = "sub_1.html"));

    if (window.innerWidth > 1024) {
      headerBox?.addEventListener('mouseover', () => {
        console.log('a')
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
      }
    } else {
      // max-width 1024px, 태블릿, 모바일
      let moving = true
      if (gnb?.style && article?.style) {
        gnb.style.height = window.innerHeight + 'px'

        menuBtn?.addEventListener('click', () => {
          console.log('a')
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
  })

  return (
    <Container>
      <h1 className="logo">
        <span className="hidden">MUTACCATO</span>
        <a href="index.html">
          <img src={Logo} alt="mutaccatologo" />
        </a>
      </h1>
      <nav>
        <h2 className="hidden">GNB section</h2>
        <button href="#" className="menu_btn">
          <i className="fas fa-bars"></i>
        </button>
        <ul id="gnb">
          <li className="depth_1">
            <a href="sub_1.html">About M</a>
          </li>

          <li className="depth_1 depth_detail">
            <a href="sub_2_1.html" className="go_detail">
              Page Detail
            </a>

            <ul className="depth_detail_box">
              <li className="tit">Page Detail</li>

              <li className="menu_detail">
                <ul className="depth_2_box">
                  <li className="depth_2">
                    <a href="sub_2_1.html">Furniture</a>
                  </li>
                  <li className="depth_2">
                    <a href="sub_2_2.html">Food</a>
                  </li>
                  <li className="depth_2">
                    <a href="sub_2_3.html">Pop-up(Banner)</a>
                  </li>
                </ul>
              </li>

              <li className="menu_img">
                <img src={DetailPageMenu} alt="" />
              </li>
            </ul>
          </li>

          <li className="depth_1 depth_lookbook">
            <a href="sub_3_1.html" className="go_detail">
              Lookbook
            </a>

            <ul className="depth_detail_box">
              <li className="tit">Look Book</li>

              <li className="menu_detail">
                <ul className="depth_2_box">
                  <li className="depth_2">
                    <a href="sub_3_1.html">2018.s/s</a>
                  </li>
                  <li className="depth_2">
                    <a href="sub_3_2.html">2018.f/w</a>
                  </li>
                  <li className="depth_2">
                    <a href="sub_3_3.html">2019.s/s</a>
                  </li>
                </ul>
              </li>

              <li className="menu_img">
                <img src={LookBookMenu} alt="" />
              </li>
            </ul>
          </li>

          <li className="depth_1">
            <a href="sub_4.html">Album Cover</a>
          </li>

          <li className="depth_1 depth_eventdesign">
            <a href="sub_5.html">Event Design</a>
            <ul className="depth_detail_box">
              <li className="tit">Event Design</li>
              <li className="menu_detail">
                <ul className="depth_2_box">
                  <li className="depth_2">
                    <a href="#">국립중앙도서관</a>
                  </li>
                  <li className="depth_2">
                    <a href="#">정보진흥원</a>
                  </li>
                  <li className="depth_2">
                    <a href="#">충현복지관</a>
                  </li>
                </ul>
              </li>
              <li className="menu_img">
                <img src={EventMenu} alt="" />
              </li>
            </ul>
          </li>

          <li className="depth_1">
            <a href="sub_6.html">Package Design</a>
          </li>
          <li className="depth_1">
            <a href="sub_7.html">Persnal Works</a>
          </li>
        </ul>
      </nav>
      <a href="https://www.instagram.com/mutaccato/" target="_black" className="go_insta">
        <img src={InstaLogo} alt="" />
      </a>
    </Container>
  )
}

export default Header
