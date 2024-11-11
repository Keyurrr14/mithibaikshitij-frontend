import React from 'react'
import './PacmanStyle.css'

function Pacman() {
  return (
    <div className="path">
      <div className="pacman"></div>
      <div className="ghost">
        <div className="eyes"></div>
        <div className="skirt"></div>
      </div>
    </div>
  )
}

export default Pacman
