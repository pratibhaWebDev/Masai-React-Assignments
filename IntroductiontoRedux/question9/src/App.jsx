import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { VStack, Heading, Container } from "@chakra-ui/react";

function App() {
  return (
    <Container centerContent>
      <VStack spacing={5} mt={10}>
        <Heading>Redux Todo App</Heading>
        <TodoInput />
        <TodoList />
      </VStack>
    </Container>
  );
}

export default App;
