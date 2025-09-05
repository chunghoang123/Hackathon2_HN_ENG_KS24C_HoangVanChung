import { Checkbox, Input, Space, Button } from "antd";
import { DeleteOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Todo } from "../Types";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, text: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    onUpdate(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <Space style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
      <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)}>
        {isEditing ? (
          <Input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onPressEnter={handleSave}
          />
        ) : (
          <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
          </span>
        )}
      </Checkbox>

      <Space>
        {isEditing ? (
          <Button icon={<SaveOutlined />} onClick={handleSave} />
        ) : (
          <Button icon={<EditOutlined />} onClick={() => setIsEditing(true)} />
        )}
        <Button danger icon={<DeleteOutlined />} onClick={() => onDelete(todo.id)} />
      </Space>
    </Space>
  );
}