import Header from 'Components/Layout/Header'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {GlobalStyles, lightTheme} from '../../Styles'

import Routes from './Routes'

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
