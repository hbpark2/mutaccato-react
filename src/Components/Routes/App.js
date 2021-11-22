import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {GlobalStyles, lightTheme} from '../../Styles'
import Cursor from '../Cursor'
import Header from '../Layout/Header'
import Routes from './Routes'

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        {/* <Cursor /> */}
        <Header />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
