import React from 'react'
import {Route} from 'react-router-dom'
import About from '../../Pages/About'
import Home from '../../Pages/Home'
import Banner from '../../Pages/PageDetail/Banner'
import Food from '../../Pages/PageDetail/Food'
import Furniture from '../../Pages/PageDetail/Furniture'

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/page_detail/furniture" component={Furniture} />
      <Route exact path="/page_detail/food" component={Food} />
      <Route exact path="/page_detail/banner" component={Banner} />
    </>
  )
}

export default Routes
