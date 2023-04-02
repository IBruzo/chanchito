import { Inter } from "next/font/google";
import * as React from "react";
import { Stack, HStack, VStack, SimpleGrid } from "@chakra-ui/react";
import { Box, Button } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

function InfoBox({ piggyOwner, currAmount, goalAmount, bgColor }) {
  const piggyBanksLink = "/home/piggyBanks/";
  let customLink = piggyBanksLink + piggyOwner;
  return (
    <Link href={customLink}>
      <Box boxShadow="xl" borderRadius="lg" m={10} p={4} bg={bgColor}>
        <VStack spacing="1">
          <Box w={400}>
            <Text
              fontSize="16"
              as="span"
              textAlign="Left"
              fontFamily="Helvetica"
            >
              Chanchito de {piggyOwner}
            </Text>
            <Text textAlign="Right" fontSize="20">
              <b>${currAmount}</b>{" "}
              <Text as="span" fontSize="12">
                DE
              </Text>{" "}
              <b>${goalAmount}</b>
            </Text>
            <Progress
              h={6}
              borderRadius="md"
              hasStripe
              colorScheme="green"
              value={(currAmount / goalAmount) * 100}
            ></Progress>
          </Box>
        </VStack>
      </Box>
    </Link>
  );
}

const Home = () => {
  const [piggyList, setPiggyList] = useState([]);

  useEffect(() => {
    fetch("/piggys.json")
      .then((response) => response.json())
      .then((data) => {
        const mappedArray = data.map((item) => {
          // Map the data to the desired format
          return {
            piggyOwner: item.piggyOwner,
            currentAmount: item.currentAmount,
            goalAmount: item.goalAmount,
            operations: item.operations,
          };
        });
        setPiggyList(mappedArray);
      })
      .catch((error) => console.error());
  }, []);

  return (
    <>
      <VStack
        spacing={4}
        h="full"
        bgGradient="linear(45deg, cyan.100, cyan.500)"
      >
        <Box width="full">
          <Link href="/home" textAlign="right" textColor="white">
            Estas conectado como: Juan A.
          </Link>
        </Box>
        <Heading textColor="white" padding={5}>
          Chanchito
          <Text fontSize={12} textAlign="center">
            Controla tu control!
          </Text>
        </Heading>

        {piggyList.map((item, index) => (
          <InfoBox
            key={index}
            piggyOwner={item.piggyOwner}
            currAmount={item.currentAmount}
            goalAmount={item.goalAmount}
            bgColor="gray.100"
          ></InfoBox>
        ))}
        <Button
          size="lg"
          position="fixed"
          bottom="20px"
          right="20px"
          backgroundColor="blue.400"
          color="white"
          _hover={{ backgroundColor: "blue.500" }}
          onClick={getNewData}
        >
          Crea un Chanchito!
        </Button>
      </VStack>
    </>
  );
};

export async function getNewData({ params }) {
  // newPiggy = {
  //   piggyOwner = '',
  //   currentAmount = 0,
  //   goalAmount = 0,
  //   operations = [],
  // }
  // let value = "";

  return alert("Esta página aún no está implementada.");

}



export default Home;
