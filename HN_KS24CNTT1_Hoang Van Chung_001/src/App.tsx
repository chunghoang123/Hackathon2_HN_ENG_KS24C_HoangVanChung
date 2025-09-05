import { useState, useEffect } from "react";
import { Card, Typography } from "antd";
import AddTodoForm from "./components/AddTodolistfrom";
import TodoList from "./components/ToDoList";
import { Todo } from "./Types";

const { Title } = Typography;

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const updateTodo = (id: number, newText: string) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  };

  return (  
    <Card style={{ width: 400, margin: "50px auto", textAlign: "center" }}>
      <Title level={2}>Todo List</Title>
      <h1>Get things done,one item at a time</h1>
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onUpdate={updateTodo} />
      <h1>Add to the todo list</h1>
      <AddTodoForm onAdd={addTodo} />
    </Card>
  );
}

export default App;