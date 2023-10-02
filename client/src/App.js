import logo from "./logo.svg";
import "./App.css";
import { LeftMenu } from "./Components/LeftMenu"; // Corrected path
import { MainContainer } from "./Components/MainContainer"; // Corrected path
import { RightMenu } from "./Components/RightMenu"; // Corrected path

function App() {
  return (
    <div className="App">
      <div className=""></div>
      <LeftMenu />
      <MainContainer />
      <RightMenu />

      <div className="background"></div>
    </div>
  );
}

export default App;

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
