import { useAtom } from "jotai";
import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import styled from "styled-components";
import { todoAtom } from "../store/todo";

export const Title = styled.div`
  background: #021666;
  background: linear-gradient(to right, #021666 0%, #14a9ff 55%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoInput = styled.input`
  width: 250px;
  height: 12px;
  padding: 16px;
  outline: none;
  background-color: #85edff4a;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  line-height: 24px;
  margin-right: 6px;
`;

export const Submit = styled.button`
  width: 70px;
  height: 40px;
  border: 0px;
  background-color: #007cf0;
  color: #ffffff;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
`;

const TodoHeader = () => {
  const [newTaskName, setNewTaskName] = useState<string>("");
  const [todoItems, setTodoItems] = useAtom(todoAtom);

  const onChangeTodoInput: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setNewTaskName(e.target.value);
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (!newTaskName) return;
    setTodoItems((prevTodos) =>
      prevTodos
        ? [
            ...prevTodos,
            {
              taskName: newTaskName,
              isCompleted: false,
              id: todoItems.length + 1,
            },
          ]
        : prevTodos
    );
  };

  return (
    <>
      <Title>to-do list</Title>
      <InputWrapper>
        <TodoInput
          value={newTaskName}
          onChange={onChangeTodoInput}
          placeholder="오늘의 할 일을 적어 주세요!"
        />
        <Submit onClick={handleSubmit}>추가</Submit>
      </InputWrapper>
    </>
  );
};

export default TodoHeader;
