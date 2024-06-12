import React, { useState } from 'react';
import Header from '../todo_components/Header';
import TodoList from '../todo_components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';

function App() {
  const filters = ['all', 'active', 'completed'];
  const [filter, setFilter] = useState('all');

  return (
    <Container className='d-flex justify-content-center align-items-center vh-100'>
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Header filters={filters} filter={filter} onFilterChange={setFilter} />
          <TodoList filter={filter} />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;