import { ChakraProvider, Flex, Box, Spacer, Button} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function StudentNavBar(){
    
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/history");
    };

    return (
        <ChakraProvider>
            <Flex bg={'green.700'}>
                <Box p='3' color={"white"} fontSize={25}>
                    Student Assignment 
                </Box>
                <Spacer />
                <Button p='3' alignSelf={'center'} marginRight={5} onClick={handleButtonClick}>
                    History
                </Button>
            </Flex>
        </ChakraProvider>
    );
}

export default StudentNavBar;