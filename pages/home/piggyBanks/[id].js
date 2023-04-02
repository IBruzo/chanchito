import { 
  Box,
  HStack,
  Heading,
  Progress,
  VStack,
  IconButton
} from "@chakra-ui/react";
import jsonData from "C:\\HackIT\\chanchito\\public\\piggys.json";

export async function getServerSideProps({ params }) {
  const data = jsonData.find((d) => d.piggyOwner === params.id);

  return {
    props: { data },
  };
}

export default function Page({ data }) {
  var percentage = Math.floor((data.currentAmount / data.goalAmount)*10000)/100
  return (
    <>
      <VStack h='full' bgGradient="linear(45deg, cyan.100, cyan.500)">
        <Heading textAlign="center" p={5}>
          Estas viendo el chanchito de {data.piggyOwner}
          </Heading>
          <Box>Completaron el <b>{percentage}%</b> de la meta!</Box>
          <Box>Recaudaron <b>${data.currentAmount}</b> de ${data.goalAmount}</Box>
        <Progress hasStripe colorScheme='green' h='6' w='full' value={(data.currentAmount / data.goalAmount)*100}>P</Progress>
      
      </VStack>
      <div>
        <ul>
          {data.operations.map((operation, index) => (
            <li key={index}>
              <p>Name: {operation.name}</p>
              <p>Amount: {operation.amount}</p>
              <p>Date: {operation.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}