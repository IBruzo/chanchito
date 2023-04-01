import { Inter } from 'next/font/google';
import * as React from 'react';
import { Stack, HStack, VStack, SimpleGrid } from '@chakra-ui/react';
import { Box, Button } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react';

function InfoBox({piggyOwner, currAmount, goalAmount, bgColor}) {
    return (
      <Box boxShadow='xl' borderRadius="lg" m={10} p={4} bg={bgColor}>
        <VStack spacing="1">
          <Box w={400}>
            <Text fontSize='16' as='span' textAlign='Left' fontFamily='Helvetica'>Chanchito de {piggyOwner}</Text>
            <Text textAlign='Right' fontSize='20'><b>${currAmount}</b> <Text as='span' fontSize='12'>DE</Text> <b>${goalAmount}</b></Text>
            <Progress h={6} colorScheme='green' value={(currAmount/goalAmount)*100}></Progress>
          </Box>
        </VStack>
      </Box>
    );
}

const Home = () => {
    return(
        <VStack spacing={4} h='100vh' bgGradient="linear(45deg, cyan.100, cyan.500)">
            <InfoBox 
                piggyOwner="Fede"
                currAmount={340}
                goalAmount={3000}
                bgColor="gray.100"
            />
            <InfoBox 
                piggyOwner="Tobias"
                currAmount={7900}
                goalAmount={8500}
                bgColor="gray.100"
            />
            <InfoBox 
                piggyOwner="Sofi"
                currAmount={3000}
                goalAmount={6000}
                bgColor="gray.100"
            />
        </VStack>

    )
}

export default Home