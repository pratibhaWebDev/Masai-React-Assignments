import React from "react";
import { Box, Heading, Container, Divider, VStack } from "@chakra-ui/react";
import BookForm from "./components/BookForm";
import FilterPanel from "./components/FilterPanel";
import BookList from "./components/BookList";

export default function App() {
  return (
    <Container maxW="container.lg" py={6}>
    
      <Heading textAlign="center" mb={6} color="teal.500">
        📚 My Book Library
      </Heading>

     
      <Box mb={8}>
        <BookForm />
      </Box>

      <Divider my={6} />

    
      <Box mb={6}>
        <FilterPanel />
      </Box>

      <Divider my={6} />

    
      <VStack spacing={4} align="stretch">
        <BookList />
      </VStack>
    </Container>
  );
}
