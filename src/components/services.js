import React from 'react'
// import {AddModeratorIcon} from '@mui/icons-material';
import { Button, Container, Grid, Paper, Typography, Avatar } from '@mui/material'
import service from './data.js';




const Services = () => {
  return (
    <div className='padding'>
        <div className="bgc">
            <h4 className="heading3">
                Our Services
            </h4>
            <Grid container spacing={2}>
                
                    {service.map((items)=>{
                        const {id, heading, body, pics, btn} = items
                        return (
                            <Grid item xs={12} md={6} key={id}>
                            <Paper  sx={{bgcolor: 'rgb(65, 65, 163)', 'paddingBottom': '40px','textAlign': 'center','paddingX': '20PX'}}>
                                <Container sx={{'paddingTop': '20px'}}><Avatar sx={{bgcolor:'#c92f65', margin: 'auto'}}>{pics}</Avatar></Container>
                                
                                <h4 className="heading4">{heading}</h4>
                                <Typography variant='p' color='white' sx={{'paddingBottom': '40px', textAlign: 'justify'}}>
                                    {body}
                                </Typography>
                                <Container sx={{display: 'flex', paddingTop: '30px'}}>
                                    <Button variant='contained' color='secondary' href='https://t.me/yalex1262' sx={{margin:' auto '}} >
                                        {btn}
                                    </Button>
                                </Container>
                            </Paper>
                            </Grid>
                        )
                    })}
                    
                
            </Grid>
        </div>
    </div>
  )
}

export default Services