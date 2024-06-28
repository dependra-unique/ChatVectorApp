import React, { useState } from 'react'
import {Container, Paper} from '@mui/material'

function Login() {

  const [isLogin, setIsLogin] = useState(true);
  return (
    <Container component={"main"} maxwidth="sx">
      <Paper 
      elevation={3}
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      >
        {
          isLogin ? <span>login</span> : <span>register</span>
        }
      </Paper>
    </Container>
    
  )
}

export default Login