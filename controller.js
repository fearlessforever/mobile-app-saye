import React, {Component} from 'react'
import { Provider } from 'react-redux'
import store from './store'
import App from './AppNew'

export default class Controller extends Component{
  render(){
    return(
      <Provider store={store} >
        <App />
      </Provider>
    );
  }
}
