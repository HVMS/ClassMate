import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Box,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import PropTypes from 'prop-types';

const SubmissionModal = ({ isOpen, onClose, assignment }) => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const toast = useToast();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = () => {

    if (description === "") {
      toast({
        title: "Description is empty",
        description: "Please write your description. It should not be empty.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (file === null) {
      toast({
        title: "File not uploaded",
        description: "Please upload a file.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }


    // Add your submit logic here
    console.log("Submitting...");
    console.log("File:", file);
    console.log("Description:", description);

    // Close the modal
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Submission</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input type="text" value={`Final Due Date: ${assignment.deadline}`} isReadOnly mb={4} />
          <Button as="label" htmlFor="fileUpload" colorScheme="blue" mb={4}>
            Upload File
            <input
              id="fileUpload"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </Button>
          {file && <Box mb={4}>Selected File: {file.name}</Box>}
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write something here for description"
            resize="vertical"
            mb={4}
          />
        </ModalBody>
        <ModalFooter>
          <Button variant="green" onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="green" onClick={handleSubmit}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

SubmissionModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    assignment: PropTypes.object.isRequired,
  };

export default SubmissionModal;
