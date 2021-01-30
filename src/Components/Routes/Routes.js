import React from 'react'
import {Route} from 'react-router-dom'
import Main from '../../Pages/Main'

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Main} />
    </>
  )
}

export default Routes
