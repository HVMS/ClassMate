import React, { useState } from 'react';
import { ChakraProvider, Box, Table, Thead, Tr, Th, Tbody, Td} from '@chakra-ui/react';
import SubmissionModal from '../submissionmodel';

function StudentGridComponent() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAssignment, setCurrentAssignment] = useState(null);

  const assignments = [
      {
        assignmentText: "Assignment 1",
        status: "",
        deadline: "May 27, 2030"
      },
      {
        assignmentText: "Assignment 2",
        status: "Completed",
        deadline: "June 16, 2030"
      },
      {
          assignmentText: "Assignment 3",
          status: "",
          deadline: "July 17, 2030"
      },
      {
          assignmentText: "Assignment 4",
          status: "",
          deadline: "May 15, 2030"
        },
        {
          assignmentText: "Assignment 5",
          status: "Completed",
          deadline: "June 5, 2030"
        },
        {
            assignmentText: "Assignment 6",
            status: "",
            deadline: "July 29, 2030"
        },
        {
          assignmentText: "Assignment 5",
          status: "Completed",
          deadline: "May 7, 2030"
        },
        {
            assignmentText: "Assignment 6",
            status: "",
            deadline: "May 29, 2030"
        },
    ];

    const handleTdClick = (assignment) => {
      setIsModalOpen(true);
      setCurrentAssignment(assignment);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setCurrentAssignment(null);
    };

return (
  <ChakraProvider>
    <Box 
        maxW="container.xl" borderWidth="1px" borderRadius="lg" borderColor="black" p={4} m={10}>
      <Table variant="simple" size="md" my={3}>
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
              <Td cursor="pointer" onClick={() => handleTdClick(assignment)}>{assignment.assignmentText}</Td>
              <Td >{assignment.status}</Td>
              <Td >{assignment.deadline}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {isModalOpen && (
        <SubmissionModal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal}
          assignment={currentAssignment}
        />
      )}
    </Box>
  </ChakraProvider>
    
  );
}

export default StudentGridComponent;
