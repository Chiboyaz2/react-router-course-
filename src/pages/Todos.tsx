import { Link } from 'react-router-dom';
import todos from '../data/todos';

export default function Todos() {
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.text}</Link>
            {todo.completed && ' (completed)'}
          </li>
        ))}
      </ul>
    </div>
  );
} 