import {createGlobalStyle, keyframes} from 'styled-components'

export const FadeInTopToBottom = keyframes`
  from {
    top: -30px;
    opacity:0;
  }
  to {
    top: 0px;
    opacity:1;
  }
`

export const FadeIn = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`

export const lightTheme = {
  keyBlue: '#4a99c3',
  keyDeepBlue: '#0b547a',
}

export const darkTheme = {
  fontColor: '#fff',
  bgColor: '#2c2c2c',
}

export const GlobalStyles = createGlobalStyle`
  #wrapper{
    padding-bottom: 10px;
  }
  main{
    margin:130px 5% 0;
    width: auto;
    transition: all .5s;
  }

  .lg-img-wrap > .lg-image {
    max-width: 80% !important;
    width: auto !important;
  }
  .cursor {
      width: 40px;
      height: 40px;
      border: 1px solid #333;
      border-radius: 100%;
      position: fixed;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode:difference;
      transition: all .5s ease;
      transition-property:  opacity, background-color, transform, mix-blend-mode;
    }

    .cursor--clicked {
      transform: translate(-50%, -50%) scale(2);
      background-color: #fefefe;
    }

    .cursor--link-hovered {
      transform: translate(-50%, -50%) scale(2);
      background-color: #fff;
      border-width: 1;
    }

    a {
      text-decoration: none;
    }

    html, body {
      cursor: none;
    }

`
