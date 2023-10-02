import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Input,
  Stack,
  Button
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };


  const handleSignUp = () => {

    if(!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }
    if(!validatePassword(password)) {
      setError('Password must be at least six characters long');
      return;
    }

    console.log(error);

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    window.location.href = '/dashboard';
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text> Sign Up for a New Account </Text>
            <Stack spacing={3}>
              <Input placeholder='Email' size='md' value={email} onChange={(e) => setEmail(e.target.value)}/>
              <Input placeholder='Password' size='md' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <Button colorScheme='teal' onClick={handleSignUp}>Sign Up</Button>
            </Stack>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default SignUp;