// eslint-disable-next-line
import React from 'react';
import './App.css';
import Todo from './compnents/todo'

function Header(){
  return <h3>This is the header</h3>
}
function App(){
  let firstname = "Rohini";
  let lastname = "Shettu";
  const date = new Date(2018,2,20,21);
  let hrs = date.getHours();
  let style = {
    border:'1px solid blue',
    color:'white',
    fontSize:'50px',
    textAlign:'center',
    backgroundColor:'black'
  }
  if (hrs >= 12 && hrs <=17) 
    style.color = 'tomato';
  else if (hrs < 12)
    style.color = 'skyblue';
  else
    style.color = 'grey';
  return(
    <div>
    <Header />
    <Todo image = '../public/images/images1.jpg' 
          name = 'image1'
          no = '1'
          />
    <Todo image = './public/images/images2' 
          name = 'image2'
          no = '2'
          />
    <Todo image = './public/images/images3' 
          name = 'image3'
          no = '3'
          />
    <Todo image = './public/images/images4' 
          name = 'image4'
          no = '4'
          />
    <h1 style={style}>Hello {firstname + " " + lastname}</h1>
    </div>
  )
}
 
export default App;
