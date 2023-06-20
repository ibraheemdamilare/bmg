import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const bgimage = require('../assets/lady00.png')

const Section = () => {
  return (
    <>
        <Grid container spacing={2} sx={{'paddingTop': '50px', 'paddingBottom': '80px', paddingLeft: '1rem', 'justifyContent': {lg: 'space-between'}}}>
            <Grid item xs={6} md={6}>
                <h4 className='heading2'>How we help our clients achieve their goals</h4>
                <Typography variant='body1' color='secondary' sx={{textAlign: 'justify'}}>
                    Our clients' success is our top priority. We are in constant communicaton with the clients that we are working with and
                    we are committed to advancing the immediate needs and wants of our clients. Our team works around the clock to provide the necessary services
                     and support that each client needs from us.
                </Typography> <br/> <br/> <br/>
                <Button variant='contained'
                    color='secondary'
                    href='https://t.me/yalex1262'
                    >
                    GET IN TOUCH
                </Button>
            </Grid>
            <Grid item xs={6} md={6}  
            sx={{ display: { xs: 'none', md: 'block' } }}
                >
                { <img className='image002' src={bgimage} alt=''/>}
            </Grid>
            <Grid item xs={3} md={6} sx={{display: { xs: 'block', md: 'none' }}}>
                { <img className='image001' src={bgimage} alt=''/>}
            </Grid>
        </Grid>
    </>
  )
}

export default Section