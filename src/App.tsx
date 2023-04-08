import './App.css'
import ListGroup from './components/ListGroup';
import Navbar from './components/Navbar';

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

  return (
    <>
    <div className='Container'>
      <Navbar buttons={buttons} navbar={navbar} onClickButton={handleClickButton}/>
      <ListGroup items={items} heading={header} onSelectItem={handleSelectItem}/>
    </div>
    </>
  )

}

export default App