import React from 'react'
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom'
import Main from 'pages/Main'
import Detail from 'pages/Detail'

const Router = () => (
  <BrowserRouter>
  <Switch>
    <Route path='/' exact component={Main}/>
    <Route path='/:name' component={Detail}/>
    <Redirect path='*' to='/'/>
  </Switch>
</BrowserRouter>
)

export default Router

