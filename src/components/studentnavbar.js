import { ChakraProvider, Flex, Box, Spacer, Button } from "@chakra-ui/react";

function StudentNavBar({ handleHistoryButtonClick}){
    return (
        <ChakraProvider>
            <Flex bg={'green.700'}>
                <Box p='3' color={"white"} fontSize={25}>
                    Student Assignment 
                </Box>
                <Spacer />
                <Button p='3' alignSelf={'center'} marginRight={5} onClick={handleHistoryButtonClick}>
                    History
                </Button>
            </Flex>
        </ChakraProvider>
    );
}

export default StudentNavBar;