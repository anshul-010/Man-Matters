import React from 'react'
import { Badge, Box, Card, CardBody, Center, Flex, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
export const Card2 = ({property}) => {
  return (
    <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
    <Image src={property.image} alt={property.image} />
    <Box   pt="0">
      <Box  ml="8px" d="flex" alignItems="baseline">
      <Box  d="flex" alignItems="center">
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
      </Box>
      <Box
        fontWeight="semibold"
        lineHeight="tight"
        as="h4"
        mt="1"
        isTruncated
        ml="8px"
      >
        {property.title}
      </Box>
      <Box
        fontWeight="semibold"
        lineHeight="tight"
        as="h4"
        mt="1"
        ml="8px"
        isTruncated
      >
        ₹{property.price} <span style={{color:"gray",textDecorationLine:"line-through"}}>{property.price+195}</span>
      </Box>
      <Box
        lineHeight="tight"
        as="h6"
        mt="1"
        isTruncated
        ml="8px"
      >
       <Badge bg={"none"}   color="#5194D1">
          For
        </Badge> {property.for}
      </Box>
      <Box
        lineHeight="tight"
        as="h6"
        mt="1"
        isTruncated
        ml="8px"
      >
       <Badge bg={"none"}   color="#5194D1">
          With
        </Badge> {property.with}
      </Box>
      <Box
        as="button"
       w={"100%"}
        bg="#5194D1"
        color="white"
        py={2}
        mt="2"
      >
        Add To Cart
      </Box>
    </Box>
  </Box>
  )
}
