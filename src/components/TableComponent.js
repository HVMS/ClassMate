import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import React from "react";

function TableComponent({ data }) {
  return (
    <Table variant="striped" colorScheme="green">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item) => (
          <Tr key={item.id}>
            <Td>{item.id}</Td>
            <Td>{item.name}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default TableComponent;
