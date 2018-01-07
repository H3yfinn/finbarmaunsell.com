/*import React from 'react';
import Link from 'gatsby-link';
import Footer from './components/footer.js'
import me from './images/me_tonga.png';
*/
import React from 'react'
import App from './components/Books/App'
import './components/Books/static/index.css'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './components/Books/reducers'

let store = createStore(reducers, applyMiddleware(thunk))

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)

