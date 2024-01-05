import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import img5 from "../assets/5.png"

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MyCarousel } from './MyCarousel';


const Home = () => {
  return (
    <Box>
      <MyCarousel />
     <Container maxW={"container.xl"} minH={"100vh"} p={16}>
      <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={"2px solid"} m="auto">SERVICES</Heading>
     <Stack  h="full" p={"4"} alignItems={"center"} direction={["column" ,"row"]}>
        <Image src={img5} h={["40","300"]} />
        <Text letterSpacing={"widest"}lineHeight={"190%"} p={["4","16"]}  textAlign={"center"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, id tenetur. Atque veritatis numquam neque suscipit fugit et temporibus, animi vero itaque quasi fuga doloremque blanditiis natus inventore perferendis voluptatum voluptates, porro sed expedita voluptas eos odit quis. Debitis minus cum sed repellendus eius nam?

        </Text>
     </Stack>
     </Container>
     
    </Box>
  );
};


export default Home;
