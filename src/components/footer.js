import { Telegram, Twitter } from '@mui/icons-material'
import {Link, Typography } from '@mui/material'
import React from 'react'


const Footer = () => {
  return (
    <>
    
        <div className="header">
      
          <div className="header1">
            <Typography variant='p' color='primary'>
              Billionaire <br/> Mindset
            </Typography>
            <div className="socials1">
              
              <Link href='https://www.twitter.com/freedom47991286'><Twitter color='primary' sx={{paddingRight: '5px', width:'30px'}} /></Link>
              <Link href='https://t.me/yalex1262'><Telegram color='primary' sx={{paddingRight: '5px', width:'30px',backgroundColor:'secondary'}}/></Link>
            </div>
            
            
          </div>

          <p className="foot">copyright by Billionaire Mindset Group, 2023</p>
            
        </div>
    </>
  )
}

export default Footer