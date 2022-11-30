import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./component/Card";
import { todoAtom } from "./store/todo";
import TodoHeader from "./TodoHeader";

import { TodoCard } from "./types/todo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const CardContainer = styled.div`
  width: 500px;
  min-height: 400px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  margin-top: 32px;
  padding: 24px;
`;

const Todo = () => {
  const [todoItems, setTodoItems] = useAtom(todoAtom);

  useEffect(() => {
    setTodoItems([
      {
        isCompleted: true,
        taskName: "asdfsdfsdfasdfasdfasdf",
      },
      {
        isCompleted: false,
        taskName: "234324234234",
      },
      {
        isCompleted: true,
        taskName: "안녕하세요!!",
      },
    ]);
  }, []);

  console.log(todoItems);

  return (
    <Container>
      <TodoHeader />
      <CardContainer>
        {todoItems.map((todo) => (
          <Card todo={todo} />
        ))}
      </CardContainer>
    </Container>
  );
};

export default Todo;
