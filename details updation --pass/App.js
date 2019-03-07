// eslint-disable-next-line
import React from 'react';
import './App.css';
// import Todo from './components/todo'
import Header from './components/header'
import FormHandle from './components/formhandle'


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
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render(){
    return (
      <div>
        <Header work={'header'}/>
        <span style={{fontFamily:'Elephant',fontSize:'50px'}}></span>
        <FormHandle />
        </div>
    )
  }
}
 
export default App;
