import React from 'react'
import logo from '../assets/loyolalogo.png'


const Download = () => {
  return (
    <div className='inputTab'>
    <img src={logo} alt="" className="logo1" />
  <label className='label'>Full Name</label>
  <input type="text" required="true" className="name" />
  <label className='label'>Register Number</label>
  <input type="number" required="true" className="regNo" />
  <a  target="_blank" rel="noreferrer noopener" href='https://drive.google.com/drive/folders/151k-QaKjtJ0TTWh5VOOQ3UCthR3wo-Uo' className="whatsApp color" >Submit</a>
</div>
  )
}

export default Download


