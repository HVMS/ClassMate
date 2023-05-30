import StudentGridComponent from "../components/studentgridcomponent";
import {ChakraProvider} from '@chakra-ui/react'
import StudentNavBar from "../components/studentnavbar";

function StudentPage(){
    return (
        <ChakraProvider>
            <StudentNavBar></StudentNavBar>
            <StudentGridComponent></StudentGridComponent>
        </ChakraProvider>
    );
}

export default StudentPage; 