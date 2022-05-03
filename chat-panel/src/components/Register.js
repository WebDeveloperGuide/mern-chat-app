import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();    
  };  

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > 
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"              
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
                        
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm_password"
              label="Confirm Password"
              type="password"
              id="confirm_password"              
            />
	        <label htmlFor="btn-upload" >
	          <Input
	            id="btn-upload"
	            name="btn-upload"
	            style={{ display: 'none' }}
	            type="file"
	             />
	          <Button
	          	sx={{ mt: 2}}
	            className="btn-choose"
	            variant="outlined"
	            component="span" >
	             Profile Picture
	          </Button>
	          <span className="file-name"></span>
	        </label>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>            
          </Box>
        </Box>        
      </Container>
  );
}

export default Register;