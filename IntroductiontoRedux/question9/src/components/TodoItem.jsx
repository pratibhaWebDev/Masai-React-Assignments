import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";
import { HStack, Text, IconButton } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <HStack justify="space-between" w="100%">
      <Text
        as={todo.status ? "s" : ""}
        onClick={() => dispatch(toggleTodo(todo.id))}
        cursor="pointer"
      >
        {todo.title}
      </Text>
      <IconButton
        icon={<DeleteIcon />}
        colorScheme="red"
        onClick={() => dispatch(deleteTodo(todo.id))}
      />
    </HStack>
  );
};

export default TodoItem;
