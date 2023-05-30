import { ChakraProvider, Flex, Box, Spacer, Button} from "@chakra-ui/react";
import React from "react";

function StudentNavBar({handleButtonClick}){
    
    const handleClick = () => {
        window.location.href = '/history'; // Redirects to the /hello route
    }; 

    return (
        <ChakraProvider>
            <Flex bg={'green.700'}>
                <Box p='3' color={"white"} fontSize={25}>
                    Student Assignment 
                </Box>
                <Spacer />
                <Button p='3' alignSelf={'center'} marginRight={5} onClick={handleClick}>
                    History
                </Button>
            </Flex>
        </ChakraProvider>
    );
}

export default StudentNavBar;