import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from "react-router-dom"
import logo from '../assets/loyolalogo.png'
import './home.css'

const Home = () => {
  return (

    <div className='container'>
    <img src={logo} alt="" className="logo" />
     <h1 className="collegeName">PU-LCS</h1>
     <p>HR Department</p>
     <div className="btn">
        <Link to="/whatsapp" style={{"textDecoration": "none"}}>
        <button className="whatsApp"><WhatsAppIcon />TO JOIN GROUP  </button>
        </Link>
        <Link to="/download" style={{"textDecoration": "none"}}>
        <button className="drive"><DescriptionIcon />DOWNLOAD NOTES</button>
        </Link>
     </div>
    </div>
  )
}

export default Home


