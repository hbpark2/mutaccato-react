import React from 'react'
import {Route} from 'react-router-dom'
import About from 'Pages/About'
import Home from 'Pages/Home'
import PageDetail from 'Pages/PageDetail'
import LookBook from 'Pages/LookBook'
import AlbumCover from 'Pages/AlbumCover'

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/page_detail" component={PageDetail} />
      <Route exact path="/look_book" component={LookBook} />
      <Route exact path="/albumcover" component={AlbumCover} />
    </>
  )
}

export default Routes
