import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { MdLibraryAddCheck } from "react-icons/md";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  
  const handleChange = (event) => setText(event.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0)
      return;
    onAdd({ id: uuidv4(), work: text, status: 'active' });
    setText('');
  }
  
  return (
    <Form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <Form.Group className="d-flex align-items-center">
        <Form.Control type="text" placeholder="할 일을 입력하세요." value={text} onChange={handleChange}
          className="pe-5 ms-2" style={{flex: 0.9}} />
        <Button className="btn ms-5" type="submit"><MdLibraryAddCheck  />추가</Button>
      </Form.Group>
    </Form>
  );
}