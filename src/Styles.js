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
  accent: '#0095f6',
  fontColor: 'rgb(38,38,38)',
  bgColor: '#fffef2',
  beige2: '#f6f5e8',
  deepGreen: '#204a23',
  contentBg: 'rgba(246, 245, 232, 1)',
  contentBorder: '1px solid rgb(219, 219, 219)',
  borderColor: 'rgba(219, 219, 219,0.5)',
  red: '#db9393',
  green: '#a9c7ab',
  waterColor: 'rgba(92, 184, 255,0.3)',
  sunlightColor: 'rgba(255, 208, 99,0.3)',
  temperatureColor: 'rgba(255, 212, 217,0.3)',
  waterAccentColor: 'rgba(92, 184, 255,0.8)',
  sunlightAccentColor: 'rgba(255, 208, 99,0.8)',
  temperatureAccentColor: 'rgba(255, 212, 217,0.8)',
  waterGradient: 'linear-gradient(90deg, rgba(180,238,255,1) 19%, rgba(92,184,255,1) 75%)',
  sunlightGradient: 'linear-gradient(90deg, rgba(255,231,160,1) 16%, rgba(253,200,151,1) 84%)',
  temperatureGradient: 'linear-gradient(90deg, rgba(183,219,255,1) 16%, rgba(255,212,217,1) 69%)',
  borderColor1: 'rgba(219,219,219)',
  borderColor2: 'rgba(51,51,51,.2)',
  keyBlue: '#4a99c3',
}

export const darkTheme = {
  fontColor: '#fff',
  bgColor: '#2c2c2c',
}

export const GlobalStyles = createGlobalStyle`
  #wrapper{
    padding-bottom: 10px;
  }

`
