import { Carousel } from "react-responsive-carousel";
import { Box, Heading, Image } from '@chakra-ui/react';
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"

 export const MyCarousel = () => {

  const headingOption={
    position: "absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:"2xl"
  }
   return(
    <Box>
         <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      

      <Box w={'full'} h={'90vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOption} >
          Watch The Future
        </Heading>
        
      </Box>
      <Box w={'full'} h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'}{...headingOption} >
          Future is Gaming
        </Heading>
        
      </Box>
      <Box w={'full'} h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption} >
          Game Console
        </Heading>
        
      </Box>
      <Box w={'full'} h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption} >
          Dream Big
        </Heading>
        
      </Box>
     
      
    </Carousel>
    </Box>
   )
  };