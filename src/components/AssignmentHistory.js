import { ChakraProvider, Box, Navbar} from "@chakra-ui/react";
import StudentNavBar from "./studentnavbar";
import { useState } from 'react';
import TableComponent from "./TableComponent";

function AssignmentHistory(){

    const [tableData, setTableData] = useState([]);

    const handleButtonClick = () => {
        const newData = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Mike Johnson" },
        ];
        setTableData(newData);
    };

    return (
        <ChakraProvider>
            <StudentNavBar handleButtonClick={handleButtonClick}></StudentNavBar>
            <Box mt={4}>
                <TableComponent data={tableData} />
            </Box>
        </ChakraProvider>
    );
}

export default AssignmentHistory; 