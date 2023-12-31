import { Box, Center, Heading, Image } from "@chakra-ui/react";

const PageNotFound = () => {
  return <Box>
    <Box width={{base:"",lg:"40%"}} m="auto">
      <Center><Heading color="gray.600">404 Not Found....</Heading></Center>
      <Image width="100%" src="https://media.tenor.com/EmJJTyrYv74AAAAi/family-fish.gif" alt="image not found"/>
    </Box>
  </Box>;
};

export default PageNotFound;
