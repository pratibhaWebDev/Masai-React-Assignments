import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { VStack, Box } from "@chakra-ui/react";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <VStack spacing={4} w="300px" mt={4}>
      {todos.map((todo) => (
        <Box
          key={todo.id}
          p={3}
          w="100%"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="sm"
        >
          <TodoItem todo={todo} />
        </Box>
      ))}
    </VStack>
  );
};

export default TodoList;
