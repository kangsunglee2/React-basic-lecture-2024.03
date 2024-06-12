import { Button } from 'react-bootstrap';

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header className="mb-4">
      <ul className="list-inline">
        {filters.map((value, index) => (
          <li key={index} className="list-inline-item">
            <Button variant={filter === value ? 'primary' : 'outline-primary'} 
              onClick={() => onFilterChange(value)}>{value}</Button>
          </li>
        ))}
      </ul>
      <hr />
    </header>
  );
}

