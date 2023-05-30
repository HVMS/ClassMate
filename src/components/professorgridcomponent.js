import React from 'react';
import { ChakraProvider, Box, Table, Thead, Tr, Th, Tbody, Td, Button} from '@chakra-ui/react';

function ProfessorGridComponent() {

  const assignments = [
      {
        assignmentText: "Assignment 1",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
        deadline: "May 27, 2030"
      },
      {
        assignmentText: "Assignment 2",
        description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet",
        deadline: "June 16, 2030"
      },
      {
          assignmentText: "Assignment 3",
          description: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
          deadline: "July 17, 2030"
      },
      {
          assignmentText: "Assignment 4",
          description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
          deadline: "May 15, 2030"
        },
        {
          assignmentText: "Assignment 5",
          description: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
          deadline: "June 5, 2030"
        },
        {
            assignmentText: "Assignment 6",
            description: "If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill",
            deadline: "July 29, 2030"
        },
        {
          assignmentText: "Assignment 5",
          description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
          deadline: "May 7, 2030"
        },
        {
            assignmentText: "Assignment 6",
            description: "Assignment 6 is lengthy, ready to take SDA and enjoy the life",
            deadline: "May 29, 2030"
        },
    ];

return (
  <ChakraProvider>
    <Box 
        maxW="-moz-fit-content" borderWidth="1px" borderRadius="lg" borderColor="black" p={4} m={10}>
      <Table variant="simple" size="lg" my={2}>
        <Thead>
          <Tr>
            <Th>Assignments</Th>
            <Th>description</Th>
            <Th>Submission Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {assignments.map((assignment, index) => (
            <Tr key={index}>
              <Td cursor="pointer">{assignment.assignmentText}</Td>
              <Td >{assignment.description}</Td>
              <Td >{assignment.deadline}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  </ChakraProvider>
    
  );
}

export default ProfessorGridComponent;
