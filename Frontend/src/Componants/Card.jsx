import React from 'react'
import { Badge, Box, Card, CardBody, Center, Flex, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
export const Card2 = ({property}) => {
  return (
    <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
    <Image src={property.image} alt={property.image} />
    <Box  pt="0">
      <Box d="flex" alignItems="baseline">
      <Box d="flex" alignItems="center">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon
              key={i}
              color={i < property.rating ? "gold" : "gray.300"}
            />
          ))}
        <Box as="span" color="gray.600" fontSize="sm" ml="2">
          {property.rating} reviews
        </Box>
        <Badge borderRadius="full" px="2" colorScheme="teal">
          New
        </Badge>
      </Box>
       
        {/* <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="upperCase"
          ml="2"
        >
          {property.rating} beds &bull; {property.rating} baths
        </Box> */}
      </Box>
      <Box
        fontWeight="semibold"
        lineHeight="tight"
        as="h4"
        mt="1"
        isTruncated
      >
        {property.title}
      </Box>
      <Box>
       Rs. {property.price}
        
      </Box>
      <Box
        
        lineHeight="tight"
        as="h6"
        mt="1"
        isTruncated
      >
       <Badge bg={"none"}   colorScheme="blue">
          For
        </Badge> {property.for}
      </Box>
      <Box
        
        lineHeight="tight"
        as="h6"
        mt="1"
        isTruncated
      >
       <Badge bg={"none"}   colorScheme="blue">
          With
        </Badge> {property.with}
      </Box>



      <Box
        as="button"
       w={"100%"}
        bg="teal.500"
        color="white"
        
        py={2}
        mt="2"
      >
        Book Now
      </Box>
    </Box>
  </Box>
  )
}
