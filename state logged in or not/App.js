// eslint-disable-next-line
import React from 'react';
import './App.css';
// import Todo from './components/todo'
import Header from './components/header'

let style = {
  border:'1px solid blue',
  color:'white',
  fontSize:'50px',
  textAlign:'center',
  backgroundColor:'black'
}

class App extends React.Component
{
  constructor(){
    super()
    this.state = {
      loggedIn:false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({loggedIn : !this.state.loggedIn})
  }
  render(){
    return(
      <div>
        {this.state.loggedIn?<h1>You are Logged In</h1>:<h1>You are  Logged Out</h1>}
        <button onClick={this.handleClick}>Log In</button>
      </div>
    )
  }
}
export default App;