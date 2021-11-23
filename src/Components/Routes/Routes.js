import React from 'react'
import About from '../../Pages/About'
import Home from '../../Pages/Home'
import PageDetail from '../../Pages/PageDetail'
import LookBook from '../../Pages/LookBook'
import AlbumCover from '../../Pages/AlbumCover'
import {Route} from 'react-router'
import EventDesign from '../../Pages/EventDesign'
import Package from '../../Pages/PackageDesign'

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/page_detail" component={PageDetail} />
      <Route exact path="/look_book" component={LookBook} />
      <Route exact path="/albumcover" component={AlbumCover} />
      <Route exact path="/event_design" component={EventDesign} />
      <Route exact path="/package" component={Package} />
    </>
  )
}

export default Routes
