import React, { useState } from 'react'

interface Props{
  items: string[];
  heading: string[];
  onSelectItem: (item:string)=> void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const heading = ["List"];

  let [selectedIndex, changeIndex] = useState(-1);

  return (
    <>
      <div>
        {heading.map((e) => { return <h1 key={e}>{e}</h1> })}
        <ul className='list-group'>
          {items.map((item, index) => {
            return <li
              className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
              key={item}
              onMouseEnter={() => {changeIndex(selectedIndex=index); onSelectItem(item)}}
              onMouseLeave={()=>changeIndex(selectedIndex=-1)}>{item}</li>
          })}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;
