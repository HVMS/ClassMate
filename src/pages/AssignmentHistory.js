import {Table, Thead, Tbody, Tr, Th, Td, ChakraProvider, Box} from '@chakra-ui/react';
import React from 'react';

function AssignmentHistory(){

  const assignments = [
    {
      assignmentText: "Assignment 1",
      status: "Completed",
      deadline: "May 27, 2030"
    },
    {
      assignmentText: "Assignment 2",
      status: "Completed",
      deadline: "June 16, 2030"
    },
    {
        assignmentText: "Assignment 3",
        status: "Completed",
        deadline: "July 17, 2030"
    },
    {
      assignmentText: "Assignment 4",
      status: "Completed",
      deadline: "May 15, 2030"
    },
    {
      assignmentText: "Assignment 5",
      status: "Completed",
      deadline: "June 5, 2030"
    },
  ];

  return (
    <ChakraProvider>
      <Box display="flex"
          justifyContent="center"
          alignItems="center"
          maxW="container.lg" borderWidth="2px" borderRadius="lg" borderColor="green" p={5} m={10}>
          <Table variant="striped" size="lg" my={3}>
          <Thead>
            <Tr>
              <Th>Assignments</Th>
              <Th>Status</Th>
              <Th>Submission Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {assignments.map((assignment, index) => (
              <Tr key={index}>
                <Td cursor="pointer">{assignment.assignmentText}</Td>
                <Td >{assignment.status}</Td>
                <Td >{assignment.deadline}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </ChakraProvider>
  );
}

export default AssignmentHistory; 