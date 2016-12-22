import 'babel-polyfill';

import React from 'react'
import ReactDOM from 'react-dom'
import {Route,Router} from 'react-router'
import Relay from 'react-relay'
import {applyRouterMiddleware,browserHistory} from 'react-router'
import useRelay from 'react-router-relay';

import TodoApp from './components/TodoApp'

//Creating base query which would we passed as queries prop to child components
const viewerQueries = {
  viewer: () => Relay.QL`query{viewer}`
}

const mountNode = document.getElementById('root')

ReactDOM.render(
    <Router
      //Step 1: Adding relay store to the environment
      environment={Relay.Store}
      history = {browserHistory}
      //Step 2: Adding useRelay to react-router middleware
      render = {applyRouterMiddleware(useRelay)} >
      <Route path="/"
        component={TodoApp}
        //Step 3: Passing query down to the components
        queries = {viewerQueries}>
      </Route>
    </Router>,
    mountNode
)
