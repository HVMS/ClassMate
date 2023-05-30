import ProfessorGridComponent from "../components/professorgridcomponent";
import { ChakraProvider } from "@chakra-ui/react";
import ProfessorNavBar from '../components/professornavbar'

function ProfessorPage(){
    return (
        <ChakraProvider>
            <ProfessorNavBar></ProfessorNavBar>
            <ProfessorGridComponent></ProfessorGridComponent>
        </ChakraProvider>
    );
}

export default ProfessorPage; 