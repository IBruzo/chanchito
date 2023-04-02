import { Inter, Roboto } from 'next/font/google';
import * as React from 'react';
import { Stack, HStack, VStack, SimpleGrid } from '@chakra-ui/react';
import { Box, Button } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

function OperationBox({name, amount, date, bgColor}) {
    return (
      <Link href="/">
      <Box boxShadow='xl' borderRadius="lg" m={10} p={4} bg={bgColor}>
        <VStack spacing="1">
          <Box w={400}>
           <Text fontFamily="Helvetica" fontSize={14} textAlign="left">{date}</Text>
           <Text fontFamily="Helvetica" fontSize={20} textAlign="right">{name}</Text>
           <Text fontFamily="Helvetica" fontSize={16} textAlign="right">{amount > 0 ? "Deposito" : "Retiro"} <Text as='span'>{Math.abs(amount)}</Text></Text>
          </Box>
        </VStack>
      </Box>
      </Link>
    );
}

function InfoBox({piggyOwner, currAmount, goalAmount}) {
    return (
      <VStack spacing={1}>
        <Heading as='h2' bgColor={'teal.600'} textAlign="center" p={5} w='8xl' size='2xl' noOfLines={1}>Bienvenido a el Chanchito de {piggyOwner}</Heading>
        
        <Progress value={(currAmount/goalAmount)*100}></Progress>
      </VStack>
    );
}

const Piggy = () => {
    return(
        <VStack spacing={1} h='200vh' bgGradient="linear(45deg, cyan.100, cyan.500)">
            <InfoBox 
                piggyOwner="Harry"
                currAmount={4000}
                goalAmount={3000}
            />
            <OperationBox 
                name="Juan A."
                amount={1000.00}
                date="XX/XX/20XX"
                bgColor="gray.100"
            />
            <OperationBox 
                name="Tobias A."
                amount={3000.00}
                date="XX/XX/20XX"
                bgColor="gray.100"
            />
            <OperationBox 
                name="Juan A."
                amount={-1000.00}
                date="XX/XX/20XX"
                bgColor="gray.100"
            />
            <OperationBox 
                name="Juan A."
                amount={1000.00}
                date="XX/XX/20XX"
                bgColor="gray.100"
            />
        </VStack>

    )
}

export default Piggy;