import React from 'react'
import "../data/styles.css";
import data from "../data/data";
import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { Card, CardBody, Flex, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';

export const Home2 = () => {
  //hover
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);
  
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
        w={"60%"}
       
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
            <CardBody bg={"#E1EFF8"} align="center" p={"0px"}>
              <Image h={"150px"} src={"https://i.mscwlns.co/media/misc/landing_pages/home-rcl/doc%202_6ku9ii.png?tr=w-500"} alt="article_1" borderRadius="lg" />
              <Stack textAlign={"left"}>
                <Heading mt={"10px"} textAlign={"center"} color={"#5194D1"} size="lg" fontWeight={"bold"}>
                Consult on App
                </Heading>
               
              </Stack>
            </CardBody>
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
            <CardBody bg={"#E1EFF8"} align="center" p={"0px"}>
              <Image h={"150px"} src={"https://i.mscwlns.co/media/misc/landing_pages/home-rcl/doc%202_6ku9ii.png?tr=w-500"} alt="article_1" borderRadius="lg" />
              <Stack textAlign={"left"}>
                <Heading mt={"10px"} textAlign={"center"} color={"#5194D1"} size="lg" fontWeight={"bold"}>
                Consult on App
                </Heading>
               
              </Stack>
            </CardBody>
          </Card>

        </Grid>
    <Flex
        
          justifyContent="center"
          gap="30px"
        w={"60%"}
       
          m="auto"
          alignItems={"center"}
          mt={"15px"}
        >
          <Card
          
            data-aos="fade-right"
            data-aos-duration="1500"
 
          >
            <CardBody   align="center" p={"0px"}>
              <Image bg={"#E1EFF8"}  w={"30vh"} p={"10%"} src={"https://i.mscwlns.co/media/bebodywise/tmarkers/trust/1m_0GtPjbGQjd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675664545766"} alt="article_1" />
              <Stack textAlign={"left"}>
                <Heading fontSize={"10px"} mt={"10px"} textAlign={"center"}  >
                Consult on Apppp
                </Heading>
               
              </Stack>
            </CardBody>
          </Card>
          <Card
          
            data-aos="fade-right"
            data-aos-duration="1500"
 
          >
            <CardBody   align="center" p={"0px"}>
              <Image bg={"#E1EFF8"}  w={"30vh"} p={"10%"} src={"https://i.mscwlns.co/media/bebodywise/tmarkers/trust/1m_0GtPjbGQjd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675664545766"} alt="article_1" />
              <Stack textAlign={"left"}>
                <Heading fontSize={"10px"} mt={"10px"} textAlign={"center"}  >
                Consult on Apppp
                </Heading>
               
              </Stack>
            </CardBody>
          </Card>
          <Card
          
            data-aos="fade-right"
            data-aos-duration="1500"
 
          >
            <CardBody   align="center" p={"0px"}>
              <Image bg={"#E1EFF8"}  w={"30vh"} p={"10%"} src={"https://i.mscwlns.co/media/bebodywise/tmarkers/trust/1m_0GtPjbGQjd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675664545766"} alt="article_1" />
              <Stack textAlign={"left"}>
                <Heading fontSize={"10px"} mt={"10px"} textAlign={"center"}  >
                Consult on Apppp
                </Heading>
               
              </Stack>
            </CardBody>
          </Card>
          

        </Flex>
    </div>
    
  )
}