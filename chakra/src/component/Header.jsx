import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {BiMenuAltLeft} from "react-icons/bi"
import { Link } from 'react-router-dom'
const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
        <Button pos={"fixed"} top={"4"} left={"4"} colorScheme='purple' p={"0"} w={"10"} h={"10"} borderRadius={"full"} onClick={onOpen} zIndex={"overlay"} >
            <BiMenuAltLeft size={"20"}   />
        </Button>
        

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>

          <DrawerBody>
           <VStack alignItems={"flex-start"}>
            <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
                <Link to={"/"}>Home</Link>
            </Button>

            <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
            <Link to={"/videos"}>Videos</Link>
            </Button>

            <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
                <Link to={"/videos?category=free"}>Watch</Link>
            </Button>

            <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
            <Link to={"/upload"}>Upload Video</Link>
            </Button>
           </VStack>
           <HStack pos={"absolute"} bottom={"10"} left={"4"} >
            <Button colorScheme='purple' onClick={onClose}>
                <Link to={"/login"}>Login</Link>
            </Button>
            <Button colorScheme='purple' variant={"outline"} onClick={onClose}>
                <Link to={"/signup"}>Sign Up</Link>
            </Button>
           </HStack>
          </DrawerBody>

         
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Header