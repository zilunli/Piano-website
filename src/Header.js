import React from 'react'
import logo from './images/logo.png'


export default function Header() {
  return (
    <div className='header'>
      <div className='vertical-center-header'>
        <img src={logo} alt="Logo"></img>
        <h1 className='title'>Virtual Piano</h1>
        <div className='login'>Login or Register</div>
      </div>
    </div>
  )
}
