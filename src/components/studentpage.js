import StudentGridComponent from "./studentgridcomponent";
import {ChakraProvider} from '@chakra-ui/react'
import StudentNavBar from "./studentnavbar";

function StudentPage(){
    return (
        <ChakraProvider>
            <StudentNavBar></StudentNavBar>
            <StudentGridComponent></StudentGridComponent>
        </ChakraProvider>
    );
}

export default StudentPage; 