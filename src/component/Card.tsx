import styled from "styled-components";

import { BsPencilSquare } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";
import { useRef } from "react";
import { TodoCard } from "../types/todo";

type Props = {
  todo: TodoCard;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid #bdbdbd;
  justify-content: space-between;
  margin-bottom: 16px;
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

const IconContainer = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
`;

const Checkbox = styled.input``;

const Card: React.FC<Props> = (props) => {
  const { todo } = props;
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleClickCheckbox = () => {
    if (checkboxRef.current != null) {
      checkboxRef.current.checked;
      console.log(checkboxRef.current.checked);
    }
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
        <TaskName>{todo.taskName}</TaskName>
      </TaskContainer>
      <IconContainer>
        <BsPencilSquare style={{ cursor: "pointer" }} />
        <IoTrashOutline style={{ cursor: "pointer" }} />
      </IconContainer>
    </Wrapper>
  );
};

export default Card;
