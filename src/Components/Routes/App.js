import React from 'react'
import Header from 'Components/Layout/Header'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {GlobalStyles, lightTheme} from '../../Styles'
import Cursor from '../Cursor'

import Routes from './Routes'

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Cursor />
        <Header />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
