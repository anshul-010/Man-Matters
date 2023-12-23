import React from 'react'
import { Badge, Box, Card, CardBody, Center, Flex, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
export const Card2 = ({property}) => {
  const toast = useToast()
  const cartData = JSON.parse(localStorage.getItem('ManMatterCart')) || [];

  function handleAddToCart(obj){
    let checkItem = cartData.some((item)=>item._id === obj._id)
    if(!checkItem){
      cartData.push(obj)
      localStorage.setItem('ManMatterCart', JSON.stringify(cartData));
      toast({
        position: 'top',
        duration: 2500,

        render: () => (
          <Box borderRadius="" color='white' p={3} bg='#619ed8'>
            <b>item added to cart 👍</b>
          </Box>
        ),
      })
    }else{
      toast({
        position: 'top',
        duration: 2500,
        render: () => (
          <Box borderRadius="" color='white' p={3} bg='#619ed8'>
            <b>item already in cart ✋</b>
          </Box>
        ),
      })
    }
  }

  return (
    <Box width={{base:"",lg:"18vw"}} borderWidth="2px"  borderRadius="lg" overflow="hidden">
      <Link to={`/product-detail/${property._id}`}><Box>
        <Box  m='auto' height="28vh" width={{base:"",lg:"18vw"}}  >
        <Image src={property.image[0]} height="100%" width="100%" alt={property.image} />
      </Box>
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
      </Box>
      </Box></Link>
      <Box
        as="button"
        w={"100%"}
        bg="#5194D1"
        color="white"
        py={2}
        mt="2"
        onClick={()=>handleAddToCart(property)}
      >
        Add To Cart
      </Box>
  </Box>
  )
}
