import {
  Box,
  HStack,
  Heading,
  Progress,
  VStack,
  IconButton,
  TextArea,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "@chakra-ui/react";
import jsonData from "../../../public/piggys.json";

export async function getServerSideProps({ params }) {
  const data = jsonData.find((d) => d.piggyOwner === params.id);

  return {
    props: { data },
  };
}

export default function Page({ data }) {
  var percentage =
    Math.floor((data.currentAmount / data.goalAmount) * 10000) / 100;
  return (
    <>
      <VStack h="full" bgGradient="linear(45deg, cyan.100, cyan.500)">
        <Heading textAlign="center" p={5}>
          Estas viendo el chanchito de {data.piggyOwner}
        </Heading>
        <Box>
          Completaron el <b>{percentage}%</b> de la meta!
        </Box>
        <Box>
          Recaudaron <b>${data.currentAmount}</b> de ${data.goalAmount}
        </Box>
        <Progress
          hasStripe
          colorScheme="green"
          h="6"
          w="full"
          value={(data.currentAmount / data.goalAmount) * 100}
        >
          P
        </Progress>
      </VStack>
      <>
        <ul>
          {data.operations.map((operation, index) => (
            <li key={index}>
              <VStack>
                <Card
                  w="400px"
                  p={0}
                  m={5}
                  align="center"
                  bgGradient="linear(45deg, cyan.100, cyan.500)"
                >
                  <CardHeader fontSize={28} textAlign="center">
                    <b>
                      {operation.amount >= 0 ? "Deposita" : "Retira"} $
                      {Math.abs(operation.amount)}
                    </b>
                  </CardHeader>
                  <CardBody fontSize={20} textAlign="left">
                    {operation.name}
                  </CardBody>
                  <CardFooter fontSize={16} textAlign="right">
                    {operation.date}
                  </CardFooter>
                </Card>
              </VStack>
            </li>
          ))}
        </ul>
      </>
    </>
  );
}
