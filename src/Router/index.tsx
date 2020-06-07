import React from 'react'
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom'
import Main from 'pages/Main'

const Router = () => (
  <BrowserRouter>
  <Switch>
    <Route path='/' exact component={Main}/>
    <Redirect path='*' to='/'/>
  </Switch>
</BrowserRouter>
)

export default Router

