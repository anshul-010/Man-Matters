import React from 'react'
import "../data/styles.css";
import data from "../data/data";

import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { Box, Button, Card, CardBody, Center, Flex, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Card2 } from '../Componants/Card';
import { ChevronRightIcon } from '@chakra-ui/icons';

export const Home2 = () => {
  //hover
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);
  const daata=[ 
    {
    image:"https://i.mscwlns.co/media/misc/pdp_rcl/26166961/HG%2030_Hair%20Serum%2030_hgt8xk.jpg?tr=w-800",
    price:899,
    title:"Stage 1 Hairloss Kit for Genetics",
    for:"Stage 1 Hair Fall",
    stage:1,
    with:"Biotin, Redensyl, Anagain",
    category:"hair",
    rating:4
},
    {
    image:"https://i.mscwlns.co/media/misc/pdp_rcl/26166961/HG%2030_Hair%20Serum%2030_hgt8xk.jpg?tr=w-800",
    price:899,
    title:"Stage 1 Hairloss Kit for Genetics",
    for:"Stage 1 Hair Fall",
    stage:1,
    with:"Biotin, Redensyl, Anagain",
    category:"hair",
    rating:4
},
    {
    image:"https://i.mscwlns.co/media/misc/pdp_rcl/26166961/HG%2030_Hair%20Serum%2030_hgt8xk.jpg?tr=w-800",
    price:899,
    title:"Stage 1 Hairloss Kit for Genetics",
    for:"Stage 1 Hair Fall",
    stage:1,
    with:"Biotin, Redensyl, Anagain",
    category:"hair",
    rating:4
},
    {
    image:"https://i.mscwlns.co/media/misc/pdp_rcl/26166961/HG%2030_Hair%20Serum%2030_hgt8xk.jpg?tr=w-800",
    price:899,
    title:"Stage 1 Hairloss Kit for Genetics",
    for:"Stage 1 Hair Fall",
    stage:1,
    with:"Biotin, Redensyl, Anagain",
    category:"hair",
    rating:4
},
]
    useEffect(() => {
      const lastIndext = people.length - 1;
      if (index < 0) {
        setIndex(lastIndext);
      }
      if (index > lastIndext) {
        setIndex(0);
      }
    }, [index, people]);
      useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div>

<section className="section">
      
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img className='person-img' src={image} alt={name}/>
             
             
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
    <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(2, 1fr)",
          }}
          justifyContent="center"
          gap="30px"
        w={"80%"}
       
          m="auto"
          alignItems={"center"}
        >
          <Card
          
            data-aos="fade-right"
            data-aos-duration="1500"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
            className="card"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          
          >
            
              <Box bg={"#E1EFF8"}  >
                <Flex align="center" alignItems="center">
                <Image h={"250px"} pos="relative"  src={"https://i.mscwlns.co/media/misc/landing_pages/home-rcl/doc%202_6ku9ii.png?tr=w-500"} alt="article_1" borderRadius="lg" />
              
              <Heading   color={"#5194D1"} size="lg" fontWeight={"bold"}>
              Consult on App
              </Heading>
              <Image m={"5px"} mt={"18px"} h={"50px"}   src={"https://i.mscwlns.co/media/misc/landing_pages/home-rcl/blarr_PfFHZtvMd.png"} alt="article_1" borderRadius="lg" />
                </Flex>
             
               
              
              </Box>
             
           
          </Card>
          
          <Card
          
            data-aos="fade-right"
            data-aos-duration="1500"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
            className="card"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          
          >
            
              <Box bg={"#E1EFF8"} >
                <Flex align="center" alignItems="center">
                <Image h={"250px"} pos="relative"  src={"https://i.mscwlns.co/media/misc/sub_category_pages/general-hair-health/Image-4.2---Assessment-nudge_v6J8A_G8z.png?tr=w-500"} alt="article_1" borderRadius="lg" />
              
              <Heading   color={"#5194D1"} size="lg" fontWeight={"bold"}>
              Assess nyself
              </Heading>
              <Image m={"5px"} mt={"18px"} h={"50px"}   src={"https://i.mscwlns.co/media/misc/landing_pages/home-rcl/blarr_PfFHZtvMd.png"} alt="article_1" borderRadius="lg" />
                </Flex>
             
               
              
              </Box>
             
           
          </Card>
          

        </Grid>
    <Flex
        
          justifyContent="center"
          gap="30px"
        w={"70%"}
       
          m="auto"
          alignItems={"center"}
          mt={"15px"}
          mb={"10px"}
        >
          <Card
          
            data-aos="fade-right"
            data-aos-duration="1500"
 
          >
            <CardBody   align="center" p={"0px"}>
              <Image  bg={"#E1EFF8"}  w={"30vh"} p={"10%"} src={"https://i.mscwlns.co/media/bebodywise/tmarkers/trust/1_Bw82nMjZZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675664231347"} alt="article_1" />
              <Stack textAlign={"left"}>
                <Text  mt={"10px"} textAlign={"center"}  >
                3L+ Consults
                </Text>
               
              </Stack>
            </CardBody>
          </Card>
          <Card
          
            data-aos="fade-right"
            data-aos-duration="1500"
 
          >
            <CardBody   align="center" p={"0px"}>
              <Image bg={"#E1EFF8"}  w={"30vh"} p={"10%"} src={"https://i.mscwlns.co/media/bebodywise/tmarkers/trust/2_athIadUPU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675664231703"} alt="article_1" />
              <Stack textAlign={"left"}>
              <Text  mt={"10px"} textAlign={"center"}  >
                150+ Doctors
                </Text>
               
              </Stack>
            </CardBody>
          </Card>
          <Card
          
            data-aos="fade-right"
            data-aos-duration="1500"
 
          >
            <CardBody   align="center" p={"0px"}>
              <Image bg={"#E1EFF8"}  w={"30vh"} p={"10%"} src={"https://i.mscwlns.co/media/bebodywise/tmarkers/trust/3_lmdAT-6cE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675664231687"} alt="article_1" />
              <Stack textAlign={"left"}>
              <Text  mt={"10px"} textAlign={"center"}  >
               10L+ Customers
                </Text>
               
              </Stack>
            </CardBody>
          </Card>
          

        </Flex>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(6, 1fr)",
            xl: "repeat(6, 1fr)",
          }}
          justifyContent="center"
          gap="30px"
          w="80%"
          m="auto"
          
          alignItems={"center"}
        >
         
          <Card
          bg={"#E1EFF8"}
            data-aos="fade-right"
            data-aos-duration="1500"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
               
            }}
            
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
         
          >
            <CardBody p={"0"} align="center">
              <Image  src={"https://i.mscwlns.co/media/misc/other/home-rcl/3_Jk-73vm_j.png?tr=w-500"} alt="article_1"  />
              <Stack  _hover={{
              bg:"black",
              textColor:"white",
              borderRadius:"7px"
            }} textAlign={"left"}>
                <Heading ml={"10px"} textAlign={"left"}  size="sm">
                 Beared <ChevronRightIcon/>
                </Heading>
                <Text ml={"10px"} >Patchy Beard | Beard Growth | Healthy Beard</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card
          bg={"#E1EFF8"}
            data-aos="fade-right"
            data-aos-duration="1500"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
               
            }}
            
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
         
          >
            <CardBody p={"0"} align="center">
              <Image  src={"https://i.mscwlns.co/media/misc/other/home-rcl/2_eC69YoDSw.png?tr=w-500"} alt="article_1"  />
              <Stack  _hover={{
              bg:"black",
              textColor:"white",
              borderRadius:"7px"
            }} textAlign={"left"}>
                <Heading ml={"10px"} textAlign={"left"}  size="sm">
                 Nutrition <ChevronRightIcon/>
                </Heading>
                <Text ml={"10px"} >Nutrition | Metabolism | Immunity</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card
          bg={"#E1EFF8"}
            data-aos="fade-right"
            data-aos-duration="1500"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
               
            }}
            
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
         
          >
            <CardBody p={"0"} align="center">
              <Image  src={"https://i.mscwlns.co/media/misc/other/home-rcl/4_EHvSVJQ1c.png?tr=w-500"} alt="article_1"  />
              <Stack  _hover={{
              bg:"black",
              textColor:"white",
              borderRadius:"7px"
            }} textAlign={"left"}>
                <Heading ml={"10px"} textAlign={"left"}  size="sm">
                 Performance <ChevronRightIcon/>
                </Heading>
                <Text ml={"10px"} >Sexual Health | Vitality | Stamina</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card
          bg={"#E1EFF8"}
            data-aos="fade-right"
            data-aos-duration="1500"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
               
            }}
            
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
         
          >
            <CardBody p={"0"} align="center">
              <Image  src={"https://i.mscwlns.co/media/misc/other/home-rcl/5_3fhACuk5-.png?tr=w-500"} alt="article_1"  />
              <Stack  _hover={{
              bg:"black",
              textColor:"white",
              borderRadius:"7px"
            }} textAlign={"left"}>
                <Heading ml={"10px"} textAlign={"left"}  size="sm">
                 Skin <ChevronRightIcon/>
                </Heading>
                <Text ml={"10px"} >Acne | Pigmentation | Anti-Aging</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card
          bg={"#E1EFF8"}
            data-aos="fade-right"
            data-aos-duration="1500"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
               
            }}
            
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
         
          >
            <CardBody p={"0"} align="center">
              <Image  src={"https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Untitled-1_jha49v.png?tr=w-500"} alt="article_1"  />
              <Stack  _hover={{
              bg:"black",
              textColor:"white",
              borderRadius:"7px"
            }} textAlign={"left"}>
                <Heading ml={"10px"} textAlign={"left"}  size="sm">
                 Quit Smoking <ChevronRightIcon/>
                </Heading>
                <Text ml={"10px"} >Quitting Smoking | Quitting Vaping</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card
          bg={"#E1EFF8"}
            data-aos="fade-right"
            data-aos-duration="1500"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
               
            }}
            
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
         
          >
            <CardBody p={"0"} align="center">
              <Image  src={"https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Homepage_hair_category_card_I-4woJERa.png?tr=w-500"} alt="article_1"  />
              <Stack  _hover={{
              bg:"black",
              textColor:"white",
              borderRadius:"7px"
            }} textAlign={"left"}>
                <Heading ml={"10px"} textAlign={"left"}  size="sm">
                 Hair <ChevronRightIcon/>
                </Heading>
                <Text ml={"10px"} >Hair Fall | Hair Growth | Dandruff</Text>
              </Stack>
            </CardBody>
          </Card>
          


        </Grid>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(2, 1fr)",
          }}
          justifyContent="center"
          
        w={"100%"}
      
      mt={"10px"}
      mb={"10px"}
          alignItems={"center"}
        >
          <Card
           p={"10px"}
           pb={"0px"}
          bg={"#E1EFF8"}
         
            data-aos="fade-right"
            data-aos-duration="1500"
         
            borderRadius={"0px"}
          
          
          >
            
              <Box  border={"2px solid #E1EFF8"} >
                
                <Center>
                <Heading textAlign={"center"}   color={"#5194D1"} size="lg" fontWeight={"bold"}>
                30% Cashback Awaits 🤯
              </Heading>
                </Center>
                <Center>
                <Heading textAlign={"center"}   color={"#5194D1"} size="sl" >
                Rewards for building habits 💸
              </Heading>
                </Center>
                <Center>
                <Heading textAlign={"center"}   color={"#5194D1"} size="sl" >
                Text doctors & fellow users 💬
              </Heading>
                </Center>
                <Center>
                <Heading textAlign={"center"}   color={"#5194D1"} size="sl" >
                Unlimited Doctor Consultations 🩺
                
              </Heading>
                </Center>

                <Center>
                <Heading textAlign={"center"}   color={"#5194D1"} size="lg" >
                What are you waiting for? Download Now!!
              </Heading>
                </Center>
              
             <Center>
              <Flex>
              <Image h={"45px"}    src={"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"} alt="article_1"  />
              <Image h={"45px"}    src={"https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Untitled_design__88__hPcMy7SlL.png?tr=w-600"} alt="article_1"  />
             
              </Flex>
             </Center>
               
             
               
              
              </Box>
             
           
          </Card>
          <Card
         
          bg={"#E1EFF8"}
        p={"10px"}
        pb={"0px"}
        borderRadius={"0px"}
        >
          
            <Box   borderRadius={"200px"} border={"2px solid #E1EFF8"}  >
              <Center>
              <Image h={"33vh"} w={"60vh"}    src={"https://i.mscwlns.co/mosaic-wellness/image/upload/v1654071511/Man%20Matters/Random/App%20download%20cards/Group-Of-Men_1.png?tr=w-800"} alt="article_1"  />
              </Center>

            </Box>
           
         
        </Card>
          
          

        </Grid>
        <Text ml={"10%"} fontWeight="bold" fontSize='3xl'>Best Sellers</Text>
        <Text  ml={"10%"} fontSize='xl'>Browse our best sellers by type of your concerns</Text>
        <Grid
          templateColumns={{
            base: "repeat(3, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(7, 1fr)",
            xl: "repeat(7, 1fr)",
          }}
          justifyContent="center"
          gap="40px"
          w="80%"
          m="auto"
          alignItems={"center"}
        >
         
        
            
              <Button bg={"#5194D1"} p="20px" pl={"50px"} pr={"50px"} m={"10px"} >Hair</Button>
              <Button bg={"#F2ECEC"} p="20px" pl={"50px"} pr={"50px"} m={"10px"} >Beared</Button>
              <Button bg={"#E4F5ED"} p="20px" pl={"50px"} pr={"50px"} m={"10px"} >Nutrition</Button>
              <Button bg={"#FAE9E9"} p="20px" pl={"50px"} pr={"50px"} m={"10px"} >Performance</Button>
              <Button bg={"#DDEFEC"} p="20px" pl={"50px"} pr={"50px"} m={"10px"} >Body</Button>
              <Button bg={"#FEF3EA"} p="20px" pl={"50px"} pr={"50px"} m={"10px"} >Skin</Button>
             
              
           
         
         
          
          


        </Grid>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          justifyContent="center"
          gap="30px"
          w="80%"
          m="auto"
          alignItems={"center"}
        >
 {daata?.map((property)=>(
          <Card2 property={property}/>
        ))}
        </Grid>
        
       <Flex     justifyContent="center"
          gap="20%"
        w={"80%"}
       
          m="auto"
          alignItems={"center"}
          mt={"15px"}>
            
           <Box w={"20%"} >
           <Image borderRadius={"50%"}  src="https://i.mscwlns.co/media/misc/other/home-rcl/Untitled_design_-_2023-02-14T161116.978_baDXsxoof.png?tr=w-500" />
       <Center>
       <Text  mt={"10px"} >Assess Yourself</Text>
       </Center>
      
            </Box> 
           <Box w={"20%"} >
           <Image borderRadius={"50%"}  src="https://i.mscwlns.co/media/misc/other/home-rcl/Untitled_design_-_2023-02-14T160453.970_Zf7K80ASa.png?tr=w-500" />
       <Center>
       <Text  mt={"10px"} >Consult Free</Text>
       </Center>
      
            </Box> 
           <Box w={"20%"} >
           <Image borderRadius={"50%"}  src="https://i.mscwlns.co/media/misc/other/home-rcl/Untitled_design_-_2023-02-14T161558.401_sH3WhAYSE.png?tr=w-500" />
       <Center>
       <Text  mt={"10px"} >Be Consistent</Text>
       </Center>
      
            </Box> 
       
       
       </Flex>
       <Text ml={"10%"} fontWeight="bold" fontSize='3xl'>Meet Our Experts</Text>
    
       <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(2, 1fr)",
          }}
          justifyContent="center"
          gap="30px"
        w={"80%"}
       
          m="auto"
          alignItems={"center"}
        >
          <Card
          
            data-aos="fade-right"
            data-aos-duration="1500"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
            className="card"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          
          >
            
              <Box bg={"#E1EFF8"}  >
                <Flex  >
                <Image h={"350px"} pos="relative"  src={"https://i.mscwlns.co/media/misc/category_pages/hair/1_WYkaxrs4J.png?tr=w-600"} alt="article_1" borderRadius="lg" />
              
              <Heading ml={"40px"} mt={"20px"}  color={"#49729F"} size="md" fontWeight={"bold"}>
              Dr. Sujit  Shanshanwal
              <Heading   color={"#49729F"} size="sm">
              MBBS, MD
              </Heading>
              <Heading  p={"30px"} pl={"0px"} color={"black"} size="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam maiores, dolores laudantium natus voluptate odit iure maxime ducimus obcaecati culpa magnam sequi ipsum magni voluptatum cupiditate modi dolorum error. Repellendus, assumenda facere.
              </Heading>
              </Heading>
             
                </Flex>
             
               
              
              </Box>
             
           
          </Card>
          <Card
          
            data-aos="fade-right"
            data-aos-duration="1500"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
            className="card"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          
          >
            
              <Box bg={"#E1EFF8"}  >
                <Flex  >
                <Image h={"350px"} pos="relative"  src={"https://i.mscwlns.co/media/misc/category_pages/hair/4_uFxS6aANb.png?tr=w-600"} alt="article_1" borderRadius="lg" />
              
              <Heading ml={"40px"} mt={"20px"}  color={"#49729F"} size="md" fontWeight={"bold"}>
              Dr. Rohit Singh
              <Heading   color={"#49729F"} size="sm">
              MBBS, DPM
              </Heading>
              <Heading  p={"30px"} pl={"0px"} color={"black"} size="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam maiores, dolores laudantium natus voluptate odit iure maxime ducimus obcaecati culpa magnam sequi ipsum magni voluptatum cupiditate modi dolorum error. Repellendus, assumenda facere.
              </Heading>
              </Heading>
             
                </Flex>
             
               
              
              </Box>
             
           
          </Card>
         
          
          
          

        </Grid>

        <Text fontWeight="bold" ml={"10%"} fontSize='3xl'>Info Matters</Text>
   
     
  <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          justifyContent="center"
          gap="30px"
          w="80%"
          m="auto"
          alignItems={"center"}
        >
    <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
    <Image src={"https://manmatters.com/blog/content/images/size/w1000/2022/10/guava-leaes-for-hair--3-.jpg"}  />
    <Box  pt="0">
      
      <Box
        fontWeight="semibold"
        lineHeight="tight"
        as="h4"
        mt="1"
        isTruncated
        m={"7px"}
      >
        5Proven Tips For Growing Hair Faster
      </Box>
      
      <Box
        
        m={"7px"}
        as="h6"
        mt="1"
        
      >
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos deserunt facere at, libero recusandae quod veritatis excepturi et, quam exercitationem dolorum ducimus amet saepe quibusdam, commodi alias harum temporibus. 
      </Box>
     



      <Box
        as="button"
       w={"100%"}
        bg="teal.500"
        color="white"
        
        py={2}
        mt="2"
      >
      Learn More
      </Box>
    </Box>
  </Box>
    <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
    <Image src={"https://manmatters.com/blog/content/images/size/w1000/2022/08/Untitled-design--27-_11zon.jpeg"}  />
    <Box  pt="0">
      
      <Box
        fontWeight="semibold"
        lineHeight="tight"
        as="h4"
        mt="1"
        m={"7px"}
      >
       Research Backed Fish Oil Benefits for Men
      </Box>
      
      <Box
        m={"7px"}
        lineHeight="tight"
        as="h6"
        mt="1"
       
      >
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos deserunt facere at, libero recusandae quod veritatis excepturi et, quam exercitationem dolorum ducimus amet saepe quibusdam, commodi alias harum temporibus. 
      </Box>
     



      <Box
        as="button"
       w={"100%"}
        bg="teal.500"
        color="white"
        
        py={2}
        mt="2"
      >
      Learn More
      </Box>
    </Box>
  </Box>
    <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
    <Image src={"https://manmatters.com/blog/content/images/size/w1000/2021/04/Gym_Rules_Every_Guy_Should_Know_unsaid_gym_rules2-1.jpg"}  />
    <Box  pt="0">
      
      <Box
        fontWeight="semibold"
        lineHeight="tight"
        as="h4"
        mt="1"
        m={"7px"}
        isTruncated
      >
        5 Gym Rules Every Guy Should Know
      </Box>
      
      <Box
        
        lineHeight="tight"
        as="h6"
        mt="1"
        m={"7px"}
      >
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos deserunt facere at, libero recusandae quod veritatis excepturi et, quam exercitationem dolorum ducimus amet saepe quibusdam, commodi alias harum temporibus. 
      </Box>
     



      <Box
        as="button"
       w={"100%"}
        bg="teal.500"
        color="white"
        
        py={2}
        mt="2"
      >
      Learn More
      </Box>
    </Box>
  </Box>
        </Grid>
        <Center>Complete your payment using any of these payment options</Center>
        <Grid
          templateColumns={{
            base: "repeat(3, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(7, 1fr)",
            xl: "repeat(7, 1fr)",
          }}
          justifyContent="center"
          gap="30px"
          w="80%"
          m="auto"
          mt={"20px"}
          alignItems={"center"}
        >
         
          <Card
            data-aos="fade-right"
            data-aos-duration="1500"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
            
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
         
          >
            
              <Image src={"https://i.mscwlns.co/mosaic-wellness/image/upload/v1603435295/staging/Home/Images/amex-icn.png?tr=w-200"} alt="article_1"  />
              
           
          </Card>
          <Card
            data-aos="fade-right"
            data-aos-duration="1500"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
            
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
         
          >
            
              <Image src={"https://i.mscwlns.co/mosaic-wellness/image/upload/v1603435295/staging/Home/Images/master-icn.png?tr=w-200"} alt="article_1"  />
              
           
          </Card>
          <Card
            data-aos="fade-right"
            data-aos-duration="1500"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
            
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
         
          >
            
              <Image src={"https://i.mscwlns.co/mosaic-wellness/image/upload/v1603435295/staging/Home/Images/visa-icn.png?tr=w-200"} alt="article_1"  />
              
           
          </Card>
          <Card
            data-aos="fade-right"
            data-aos-duration="1500"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
            
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
         
          >
            
              <Image src={"https://i.mscwlns.co/mosaic-wellness/image/upload/v1603435295/staging/Home/Images/bhim-icn.png?tr=w-200"} alt="article_1"  />
              
           
          </Card>
          <Card
            data-aos="fade-right"
            data-aos-duration="1500"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
            
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
         
          >
            
              <Image src={"https://i.mscwlns.co/mosaic-wellness/image/upload/v1603435295/staging/Home/Images/gpay-icn.png?tr=w-200"} alt="article_1"  />
              
           
          </Card>
          <Card
            data-aos="fade-right"
            data-aos-duration="1500"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
            
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
         
          >
            
              <Image src={"https://i.mscwlns.co/mosaic-wellness/image/upload/v1603435295/staging/Home/Images/netbanking-icn.png?tr=w-200"} alt="article_1"  />
              
           
          </Card>
          <Card
            data-aos="fade-right"
            data-aos-duration="1500"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
            
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
         
          >
            
              <Image src={"https://i.mscwlns.co/mosaic-wellness/image/upload/v1603435295/staging/Home/Images/cash-icn.png?tr=w-200"} alt="article_1"  />
              
           
          </Card>
          
          


        </Grid>
    </div>
    
  )
}