import { Button, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const navigate = useNavigate()
    const[name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
  
    const handleClick = (e) => {
        e.preventDefault()

        if(name === "") {
            setNameError(true)
        }
        if(email==='') {
            setEmailError(true)
        }
        if(message==='') {
            setMessageError(true)
        }
        if(name && email && message) {
            emailjs.sendForm('service_qardzpq', 'template_o22v7os', form.current, 'qGZk1MkA4c73bRey1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            navigate('/')
        }
        
       
    }

    const form = useRef();
   
    
  return (
    <>
        <div className="bgimg">

        <Container>
            <Typography 
            variant='p'
            color='blue'
            gutterBottom
            sx={{
                marginY: "40px", display: "block", fontFamily: 'sans-serif', fontWeight:'bold'
            }}
            >
            You can reach us via email through the form below
                
            </Typography>

            <form noValidate autoComplete='off' action="submit" ref={form}>
                
                <TextField 
                error={nameError}
                label="Project Name"
                name='from_name'
                fullWidth
                value={name}
                required
                sx={{
                    marginY: "20px", display: "block", fontFamily: 'sans-serif'
                }}
                onChange = {(e) => {setName(e.target.value)}}
                />

                <TextField 
                error={emailError}
                label="email"
                name='from_email'
                fullWidth
                value={email}
                required
                sx={{
                    marginY: "20px", display: "block"
                }}
                onChange = {(e) => {setEmail(e.target.value)}}
                />

                <TextField 
                error = {messageError}
                label="Message"
                value={message}
                name='message'
                onChange = {(e) => {setMessage(e.target.value)}}
                fullWidth
                required
                multiline
                rows={4}
                sx={{
                    marginY: "20px", display: "block"
                }}
                />

                <Container sx={{paddingBottom: '50px'}}>
                    <Button
                    onClick={handleClick}
                    variant='contained'
                    disableElevation
                    type='submit'
                    color='secondary'
                    >
                    Submit   
                    </Button>
                </Container>

                
            </form>
            
        
        </Container>

        </div>

    </>
  )
}

export default Contact