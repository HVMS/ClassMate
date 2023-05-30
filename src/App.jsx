import './App.css';
import NavigationBar from './components/navigationbar';
import ProfessorPage from './pages/professorpage';
import StudentPage from './pages/studentpage';
import AssignmentHistory from './pages/AssignmentHistory'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom';
import { ChakraProvider, Center, Button} from '@chakra-ui/react';

function App() {
  
  const HomePage = () => {
    return (
      <Center mt={8}>
        <Button colorScheme="blue" as={Link} to="/professor" mr={4}>
          Professor
        </Button>
        <Button colorScheme="blue" as={Link} to="/student" ml={4}>
          Student
        </Button>
      </Center>
    );
  };

  return (
    <ChakraProvider>
      <NavigationBar></NavigationBar>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/professor" element={<ProfessorPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/history" element={<AssignmentHistory />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;