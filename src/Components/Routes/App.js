import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {GlobalStyles, lightTheme} from '../../Styles'
import Cursor from '../Common/Cursor'
import Header from '../Layout/Header'
import NewHeader from '../Layout/NewHeader'
import Routes from './Routes'

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        {/* <Cursor /> */}
        {/* <Header /> */}
        <NewHeader />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
