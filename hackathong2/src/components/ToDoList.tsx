import { List } from "antd";
import TodoItem from "./ToDoItem";
import { Todo } from "../Types";

interface Props {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, text: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete, onUpdate }: Props) {
  return (
    <List
      bordered
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item>
          <TodoItem
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        </List.Item>
      )}
    />
  );
}