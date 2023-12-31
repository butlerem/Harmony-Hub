import React from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  VStack,
  Grid,
  theme,
  Card,
  CardBody,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  useDisclosure,
  FormControl,
  FormLabel,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function UserProfilePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [profile, setProfile] = React.useState({
    name: 'John Smith',
    email: 'johnsmith@example.com',
    password: 'strongpassword123!',
  });

  const handleEditProfile = () => {
    // Handle updating the profile information here
    // Update the profile state with the new data
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Heading as="h1">Your Current Plan</Heading>
            <Card>
            <CardBody>
                <Text>You are currently using HarmonyHub: Free!</Text>
              </CardBody>
            </Card>
            <Button colorScheme="teal">
                Change Plan Will Available in the Future
              </Button>
            <Heading as="h1">Plan Options</Heading>
            <Card>
              <CardBody>
                <Text>HarmonyHub: Free!</Text>
                <Text>Listen to music and create your own playlists. Includes ads.</Text>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Text>HarmonyHub: Premium!</Text>
                <Text>Listen to music and create your own playlists without ads.</Text>
              </CardBody>
            </Card>
              <Button colorScheme="teal" onClick={onOpen}>
                Edit Profile
              </Button>
              <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Edit Profile</DrawerHeader>
                  <DrawerBody>
                    <FormControl id="name">
                      <FormLabel>Name</FormLabel>
                      <Input
                        type="text"
                        value={profile.name}
                        onChange={(e) =>
                          setProfile({ ...profile, name: e.target.value })
                        }
                      />
                    </FormControl>
                    <FormControl id="email">
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        value={profile.email}
                        onChange={(e) =>
                          setProfile({ ...profile, email: e.target.value })
                        }
                      />
                    </FormControl>
                    <FormControl id="password">
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        value={profile.password}
                        onChange={(e) =>
                          setProfile({ ...profile, password: e.target.value })
                        }
                      />
                    </FormControl>
                  </DrawerBody>
                  <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme="teal" onClick={handleEditProfile}>
                      Save
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default UserProfilePage;
