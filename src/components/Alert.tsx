import React from 'react'

interface Props{
    children: string;
    visible: boolean;
    onClick: ()=>void;
}

const Alert = ({children, visible, onClick}:Props) => {
  return (
    <>
    
          <div className={visible === true ? 'alert alert-primary d-flex mt-4' : 'none'} style={{justifyContent:"space-between"}}>
              {children}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClick}></button>
          </div>
    
    </>
  )
}

export default Alert