

import React, { Component } from 'react'
import Login from './components/Login'
import './App.css';
import MainApp from './components/MainApp';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false,
       userId: '',
       role: ''
    }
  }
  componentDidMount = ()=>{
    console.log(typeof localStorage.getItem("isLoggedIn"))
    this.setState({
      isLoggedIn: localStorage.getItem("isLoggedIn"),
      userId: localStorage.getItem("userId"),
      role: localStorage.getItem("role")
    })
  }
  handleLogin = (values)=>{
    localStorage.setItem('isLoggedIn', "true");
    localStorage.setItem('userId', values.userId);
    localStorage.setItem('role', values.role);
    this.setState({
      isLoggedIn: localStorage.getItem("isLoggedIn"),
      userId: localStorage.getItem("userId"),
      role: localStorage.getItem("role")
    })
    // setter
    // localStorage.setItem('myData', data);
    
    // // getter
    // localStorage.getItem('myData');
    
    // // remove
    // localStorage.removeItem('myData');
    
    // // remove all
    // localStorage.clear();
  }
  render() {
    let page = <Login handleLogin={this.handleLogin}/>
    if(this.state.isLoggedIn=="true"){
      page = <MainApp data={this.state}/>
    }
    return (
      <>
        {page}
        
      </>
    )
  }
}

export default App;
