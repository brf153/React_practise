import React from 'react'

interface Props{
    children: string;
    road: string[]
}

const Button=({children, road}:Props)=>{
  return (
    <div>
    {road.map((e)=>{
        return <button className='btn btn-secondary'>{e}</button>;
    })}

    <button type="button" className="btn btn-primary">{children}</button>
    </div>
  )
}

export default Button