// eslint-disable-next-line
import React from 'react';
import './App.css';
import Todo from './components/todo'
import Product from './components/data/product'

function Header(){
  return <h3>This is the header</h3>
}
function App(){
  let style = {
    border:'1px solid blue',
    color:'white',
    fontSize:'50px',
    textAlign:'center',
    backgroundColor:'black'
  }
  const data = Product.map((item) => <Todo key={item.id} item={item}/>);
  return(
    <div>
    <Header />
    {data}
    <h1 style={style}>Hello React</h1>
    </div>
  )
}
 
export default App;
