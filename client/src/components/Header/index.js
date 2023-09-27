import React from 'react';
import { Box, Flex, Spacer, Link, Text, Container } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="teal" color="white">
      <Container maxW="container.xl">
        <Flex py={4} align="center">
          <Text fontSize="xl" fontWeight="bold">
            Harmoney Hub
          </Text>
          <Spacer />
          <Link color="white" mr={3}>
            Dashboard
          </Link>
          <Link color="white" mr={3}>
            Collaborations
          </Link>
          <Link color="white" mr={3}>
            Profile
          </Link>
          <Link color="white" mr={3}>
            Create
          </Link>
          <Link color="white" mr={3}>
            Logout
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export { Navbar };
