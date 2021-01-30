import Header from 'Components/Layout/Header'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Routes from './Routes'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  )
}

export default App
