import styled from "styled-components";

import { BsPencilSquare } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";
import { memo, MouseEventHandler, useRef, useState } from "react";
import { TodoCard } from "../types/todo";
import { useAtom, useSetAtom } from "jotai";
import { todoAtom } from "../store/todo";

type Props = {
  todo: TodoCard;
  id: number;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid #bdbdbd;
  justify-content: space-between;
  margin-bottom: 16px;
  height: 30px;
`;

const TaskContainer = styled.div`
  display: flex;
`;

const TaskName = styled.div`
  display: block;
  word-break: break-all;
  width: fit-content;
  max-width: 400px;
  font-weight: 700;
  font-size: 20px;
  color: #181717;
  margin-left: 16px;
`;

const TaskEditInput = styled.input`
  width: 370px;
  font-weight: 700;
  font-size: 20px;
  color: #181717;
  margin-left: 16px;
  outline: none;
  border: 0px;
`;

const SaveButton = styled.button`
  width: 100px;
  height: 25px;
  border-radius: 16px;
  border: 0;
  font-weight: 700;
  color: #ffff;
  background: #3b3b9a;
  cursor: pointer;
`;

const IconContainer = styled.div`
  width: 70px;
  margin-left: 16px;
  display: flex;
  justify-content: space-between;
`;

const Checkbox = styled.input``;

const Card: React.FC<Props> = (props) => {
  const { todo, id } = props;
  const [todoList, setTodoList] = useAtom(todoAtom);
  const [isEditing, setIsEditing] = useState(false);
  const [updateTaskName, setUpdateTaskName] = useState(todo.taskName);

  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleClickCheckbox = () => {
    if (checkboxRef.current != null) {
      const updateCheckbox = todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
      setTodoList(updateCheckbox);
    }
  };

  const handleDelete: MouseEventHandler<SVGElement> = () => {
    const removedList = todoList.filter((todo) => todo.id !== id);
    setTodoList(removedList);
  };

  const handleUpdate: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (updateTaskName === todo.taskName) return setIsEditing((prev) => !prev);

    const updateTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, taskName: updateTaskName };
      }
      return todo;
    });
    setTodoList(updateTodoList);
    setIsEditing((prev) => !prev);
  };

  return (
    <Wrapper>
      <TaskContainer>
        <Checkbox
          onChange={handleClickCheckbox}
          ref={checkboxRef}
          type="checkbox"
          defaultChecked={todo.isCompleted}
        />
        {isEditing ? (
          <TaskEditInput
            value={updateTaskName}
            onChange={(e) => setUpdateTaskName(e.target.value)}
          />
        ) : (
          <TaskName>{todo.taskName}</TaskName>
        )}
      </TaskContainer>
      <IconContainer>
        {isEditing ? (
          <SaveButton onClick={handleUpdate}>저장</SaveButton>
        ) : (
          <>
            <BsPencilSquare
              onClick={() => setIsEditing((isEditing) => !isEditing)}
              style={{ cursor: "pointer" }}
            />
            <IoTrashOutline
              onClick={handleDelete}
              style={{ cursor: "pointer" }}
            />
          </>
        )}
      </IconContainer>
    </Wrapper>
  );
};

export default memo(Card);
