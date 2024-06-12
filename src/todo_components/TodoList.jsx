import { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import AddTodo from './AddTodo';
import Todo from './Todo';

export default function TodoList({ filter }) {
  const initData = readFromLocalStorage();
  const [todos, setTodos] = useState(initData);
  const handleUpdate = updated =>
    setTodos(todos.map(todo => (todo.id === updated.id) ? updated : todo));
  const handleDelete = deleted =>
    setTodos(todos.filter(todo => todo.id !== deleted.id));
  const handleAdd = todo => setTodos([...todos, todo]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = getFilteredTodos(todos, filter);

  return (
    <div className="mt-4">
      <ListGroup>
        {filteredTodos.map(todo => (
          <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ListGroup>
      <AddTodo onAdd={handleAdd} />
    </div>
  );
}

function readFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredTodos(todos, filter) {
  if (filter === 'all')
    return todos;
  return todos.filter(todo => todo.status === filter);
}