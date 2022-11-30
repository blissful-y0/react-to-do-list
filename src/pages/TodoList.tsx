import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../component/Card";
import { todoAtom } from "../store/todo";
import TodoHeader from "../component/TodoHeader";

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
  border-radius: 8px;
  margin-top: 32px;
  padding: 24px;
`;

const NoItemYet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

const Todo = () => {
  const [todoItems] = useAtom(todoAtom);

  return (
    <Container>
      <TodoHeader />
      {todoItems.length ? (
        <CardContainer>
          {todoItems.map((todo) => (
            <Card id={todo.id} key={todo.id} todo={todo} />
          ))}
        </CardContainer>
      ) : (
        <NoItemYet>오늘의 할 일을 적어 볼까요?</NoItemYet>
      )}
    </Container>
  );
};

export default Todo;
