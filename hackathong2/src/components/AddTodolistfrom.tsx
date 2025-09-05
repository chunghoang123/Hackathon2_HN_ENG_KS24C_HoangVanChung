import { useState } from "react";
import { Input, Button, Space } from "antd";

interface Props {
  onAdd: (text: string) => void;
}

export default function AddTodoForm({ onAdd }: Props) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  return (
    <Space.Compact style={{ width: "100%" }}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add to the todo list"
        onPressEnter={handleAdd}
      />
      <Button type="primary" onClick={handleAdd}>
        Add Item
      </Button>
    </Space.Compact>
  );
}