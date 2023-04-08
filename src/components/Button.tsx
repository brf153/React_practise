import React from 'react'

interface Props{
    children: string;
    road: string[];
    onClick: ()=>void;
    color?: string;
}

const Button=({children, road, onClick, color}:Props)=>{
  return (
    <div>
    {road.map((e)=>{
        return <button className={'btn btn-'+color} onClick={onClick}>{e}</button>;
    })}

    <button type="button" className="btn btn-primary">{children}</button>
    </div>
  )
}

export default Button