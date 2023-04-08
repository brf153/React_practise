import React from 'react'

interface Props{
    navbar: string[];
    buttons: string[];
    onClickButton: (button:string)=> void
}

export default function Navbar({ buttons, navbar, onClickButton } : Props) {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid d-inlineflex">
              {navbar.map((e) => {
                  return <a className="navbar-brand" href="#">{e}</a>
              })}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item d-flex">
                      {buttons.map((button) => {
                          return <a className="nav-link active px-3" aria-current="page" href="#" onClick={()=>onClickButton(button)}>{button}</a>;
                      })}
                  </li>
              </ul>
          </div>
      </nav>
  )
}
