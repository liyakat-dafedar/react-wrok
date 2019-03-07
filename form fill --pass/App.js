// eslint-disable-next-line
import React from 'react';
import './App.css';
// import Todo from './components/todo'
import Header from './components/header'
import FormHandle from './components/formhandle'


class App extends React.Component
{
  constructor(){
    super()
    this.state = {
    }
  }

  render(){
    return (
      <div>
        <Header work={'header'}/>
        <FormHandle />
        </div>
    )
  }
}
 
export default App;
