import { Inter } from 'next/font/google';
import * as React from 'react';
import { Stack, HStack, VStack, SimpleGrid } from '@chakra-ui/react';
import { Box, Button } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import piggysData from './piggys.json'

function InfoBox({piggyOwner, currAmount, goalAmount, bgColor}) {
    const piggyBanksLink = "/home/piggyBanks/"
    let customLink = piggyBanksLink + piggyOwner
    return (
      <Link href={customLink}>
      <Box boxShadow='xl' borderRadius="lg" m={10} p={4} bg={bgColor}>
        <VStack spacing="1">
          <Box w={400}>
            <Text fontSize='16' as='span' textAlign='Left' fontFamily='Helvetica'>Chanchito de {piggyOwner}</Text>
            <Text textAlign='Right' fontSize='20'><b>${currAmount}</b> <Text as='span' fontSize='12'>DE</Text> <b>${goalAmount}</b></Text>
            <Progress h={6} hasStripe colorScheme='green' value={(currAmount/goalAmount)*100}></Progress>
          </Box>
        </VStack>
      </Box>
      </Link>
    );
}

const Home = () => {

  const [piggyList, setPiggyList] = useState([]);

  useEffect(() => {
        const mappedArray = piggysData.map((element) => {
          return (
            <InfoBox 
              piggyOwner={element.piggyOwner}
              currAmount={element.currentAmount}
              goalAmount={element.goalAmount}
              bgColor="gray.100"
            />
          );
        });
        setPiggyList(mappedArray);
  }, []);


    return(
        <VStack spacing={4} h='100vh' bgGradient="linear(45deg, cyan.100, cyan.500)">
            {piggyList}
        </VStack>

    )
}

export default Home