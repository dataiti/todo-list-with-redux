import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addTodo } from "../../redux/actions";
import { todoRemainingSelector } from "../../redux/selectors";
import Todo from "../Todo";

export default function TodoList() {
  const dispatch = useDispatch();

  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todoRemainingSelector);

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );

    setPriority("Medium");
    setTodoName("");
  };

  const handleInputTodoNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleSelectPriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
            />
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputTodoNameChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleSelectPriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
