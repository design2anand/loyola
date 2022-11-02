import React from 'react'
import './whatsApp.css'
import logo from '../assets/loyolalogo.png'

const WhatsApp = () => {
  return (
    <div className='inputTab'>
        <img src={logo} alt="" className="logo1" />
      <label className='label'>Full Name</label>
      <input type="text" className="name" />
      <label className='label'>Register Number</label>
      <input type="number" className="regNo" />
      <a  target="_blank" rel="noreferrer noopener" href='https://chat.whatsapp.com/HSKzkKnyy29CH5YrFNZzDx' className="whatsApp color" >Submit</a>
    </div>
  )
}

export default WhatsApp