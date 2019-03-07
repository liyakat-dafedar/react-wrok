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
      count:0,
      loading:true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    //this.setState({count:this.state.count+1})
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({loading:false})
    },2000)
  }
  render(){
    return (
      <div>
        <Header work={'header'}/>
        <span style={{fontFamily:'Elephant',fontSize:'50px'}}>{this.state.count}</span>
        <br/>{this.state.loading?<h4>Loading...</h4>:<button onClick={this.handleClick}>click me</button>}
        </div>
    )
  }
}
 
export default App;
