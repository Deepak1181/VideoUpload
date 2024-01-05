import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from "react-icons/ai";
const Footer = () => {
  return (
   <Box bgColor={"blackAlpha.900"} minH={"40"}  p={"16"} color={"white"}>
  <Stack direction={["column","row"]}>
    <VStack alignItems={"stretch"} w="full" px="4">
        <Heading size={"md"} textTransform={"uppercase"} textAlign={["center","left"]}>
            Subscribe to get updates
        </Heading>
        <HStack borderBottom={"2px solid white"} py={"2"}>
            <Input placeholder='Enter your email...'
            border={"none"}
            borderRadius={"none"}
            outline={"none"}
            focusBorderColor='none'
            />

            <Button p={"0"} variant={"ghost"} colorScheme='purple' >
            <AiOutlineSend  size={20}/>
            </Button>
        </HStack>
    </VStack>
    <VStack w="full" borderLeft={["none","1px solid white"]} borderRight={["none","1px solid white"]} >
   <Heading textTransform={'uppercase'}textAlign={"center"} >
   VIDEO HUB
   </Heading>
   <Text>All right reserved</Text>
    </VStack>

    <VStack w="full">
  <Heading size={"md"} textTransform={"uppercase"}>Social Media</Heading>
  <Button variant={"link"} colorScheme='whiteAlpha'>
    <a href=''>Youtube</a>
  </Button>
  <Button variant={"link"} colorScheme='whiteAlpha'>
    <a href=''>Facebook</a>
  </Button>
  <Button variant={"link"} colorScheme='whiteAlpha'>
    <a href=''>Instagram</a>
  </Button>
    </VStack>
  </Stack>
   </Box>
  )
}

export default Footer