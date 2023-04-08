import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import ListGroup from './components/ListGroup';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

function App() {

  const header=[
    "List"
  ];

  const items= [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris"
  ];

  const buttons=[
    "Home",
    "Link"
  ]

  const navbar=[
    "Navbar"
  ]

  const handleSelectItem= (item:string)=>{
    console.log(item);
  }

  const handleClickButton= (button:string)=>{
    console.log(button);
  }

  const road=[
    "Hello",
    "Bring it on"
  ]

  let [color, setColor]= useState("primary")

  let [visible, setVisible]= useState(false)



  return (
    <>
    <div className='Container'>
      <Navbar buttons={buttons} navbar={navbar} onClickButton={handleClickButton}/>
      <ListGroup items={items} heading={header} onSelectItem={handleSelectItem}/>
      <Button road={road} onClick={()=>setVisible(visible=true)} color={color}>My button</Button>
      {visible && <Alert visible={visible} onClick={()=>setVisible(visible=false)}>Alert</Alert>}
    </div>
    </>
  )

}

export default App