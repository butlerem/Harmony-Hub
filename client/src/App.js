// import React from 'react';
// import {
//   ChakraProvider,
//   Box,
//   Text,
//   Link,
//   VStack,
//   Code,
//   Grid,
//   theme,
// } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

// function App() {
//   return (
//     <ChakraProvider theme={theme}>
//       <Box textAlign="center" fontSize="xl">
//         <Grid minH="100vh" p={3}>
//           <ColorModeSwitcher justifySelf="flex-end" />
//           <VStack spacing={8}>
//             <Logo h="40vmin" pointerEvents="none" />
//             <Text>
//               Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
//             </Text>
//             <Link
//               color="teal.500"
//               href="https://chakra-ui.com"
//               fontSize="2xl"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn Chakra
//             </Link>
//           </VStack>
//         </Grid>
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default App;

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
  Button,
  LinkBox,
  LinkOverlay,
  Heading,
  Divider,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
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
            <Text> Login to Your Account </Text>
            <Stack spacing={3}>
              <Input placeholder='Email' size='md' value={email} onChange={(e) => setEmail(e.target.value)}/>
              <Input placeholder='Password' size='md' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <Button colorScheme='teal' onClick={handleSignIn}>Sign In</Button>
            </Stack>
              <Divider />
            <LinkBox as='article'>
              <Heading size='md' my='2'>
                <LinkOverlay href='#'>
                  Create an Account
                </LinkOverlay>
              </Heading>
            </LinkBox>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default Login;