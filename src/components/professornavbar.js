import { ChakraProvider, Flex, Box, Spacer, Button } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, FormControl, FormLabel, Input, Textarea, FormErrorMessage, Alert, AlertIcon, AlertTitle, Stack } from "@chakra-ui/react";
import { useState } from "react";

function ProfessorNavBar(){
    const [isOpen, setIsOpen] = useState(false);
    const [submissionData, setSubmissionData] = useState({
        submissionDate: "",
        description: "",
        file: null,
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSubmissionData({
        submissionDate: "",
        description: "",
        file: null,
        });
        setFormErrors({});
        setIsSubmitting(false);
        setSubmissionSuccess(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubmissionData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSubmissionData((prevData) => ({
        ...prevData,
        file: file,
        }));
    };

    const handleSubmit = () => {
        const errors = validateForm();
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            setSubmissionSuccess(true);

            setTimeout(() => {
                closeModal(); // Close the modal after a 2-second delay
            }, 1500);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!submissionData.submissionDate) {
        errors.submissionDate = "Submission date is required";
        }
        if (!submissionData.description) {
        errors.description = "Description is required";
        }
        if (!submissionData.file) {
        errors.file = "File upload is required";
        }
        return errors;
    };

    return (
        <ChakraProvider>
            <Flex bg={'green.700'}>
                <Box p='3' color={"white"} fontSize={25}>
                    Assignments 
                </Box>
                <Spacer />
                <Button onClick={openModal} p='3' alignSelf={'center'} marginRight={5}>
                    Create Assignments
                </Button>

                <Modal isOpen={isOpen} onClose={closeModal}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Final Submission</ModalHeader>
                        <ModalBody>
                        {submissionSuccess && (
                            <Alert status="success" mb={4}>
                            <AlertIcon />
                            <AlertTitle>Submission Successful!</AlertTitle>
                            </Alert>
                        )}

                        <Stack spacing={4}>
                            <FormControl isInvalid={formErrors.submissionDate}>
                            <FormLabel>Submission Date</FormLabel>
                            <Input type="date" name="submissionDate" value={submissionData.submissionDate} onChange={handleChange} />
                            <FormErrorMessage>{formErrors.submissionDate}</FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={formErrors.description}>
                            <FormLabel>Description</FormLabel>
                            <Textarea name="description" value={submissionData.description} onChange={handleChange} />
                            <FormErrorMessage>{formErrors.description}</FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={formErrors.file}>
                            <FormLabel>File Upload</FormLabel>
                            <Input type="file" onChange={handleFileChange}/>
                            <FormErrorMessage>{formErrors.file}</FormErrorMessage>
                            </FormControl>
                        </Stack>
                        </ModalBody>

                        <ModalFooter>
                        <Button variant="ghost" onClick={closeModal} mr={3} disabled={isSubmitting}>
                            Close
                        </Button>
                        <Button colorScheme="blue" onClick={handleSubmit} isLoading={isSubmitting} disabled={isSubmitting}>
                            Submit
                        </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </ChakraProvider>
    );
}

export default ProfessorNavBar;