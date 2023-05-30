import ProfessorGridComponent from "./professorgridcomponent";
import { ChakraProvider } from "@chakra-ui/react";
import ProfessorNavBar from "./professornavbar";

function ProfessorPage(){
    return (
        <ChakraProvider>
            <ProfessorNavBar></ProfessorNavBar>
            <ProfessorGridComponent></ProfessorGridComponent>
        </ChakraProvider>
    );
}

export default ProfessorPage; 