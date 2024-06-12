import { Button, Form } from 'react-bootstrap';
import { FaRegTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, work, status } = todo;

  const handleChange = e => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  }

  const handleDelete = () => onDelete(todo);
  
  return (
    <div className="d-flex align-items-center mb-2">
      <Form.Check type="checkbox" id={id} checked={status === 'completed'} onChange={handleChange}
        className="me-3" />
      <Form.Label htmlFor={id} className="flex-grow-1 mb-0">{work}</Form.Label>
      <Button variant="danger" onClick={handleDelete}><FaRegTrashAlt /></Button>
    </div>
  );
}