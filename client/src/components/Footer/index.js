import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  useDisclosure,
  Avatar,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function AvatarLink() {
  const { onOpen } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
              <Avatar bg='teal.500' ref={btnRef} onClick={onOpen} position="fixed" bottom="1em" right="1em"/>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default AvatarLink;