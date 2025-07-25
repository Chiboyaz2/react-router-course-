import { useParams } from 'react-router-dom';
import todos from '../data/todos';

interface Params extends Record<string, string | undefined> {
  id: string;
}

export default function TodoDetails() {
  const { id } = useParams<Params>();
  const todo = todos.find(todo => todo.id === parseInt(id as string));

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return (
    <div>
      <h1>Todo Details</h1>
      <p>ID: {todo.id}</p>
      <p>Text: {todo.text}</p>
      <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
    </div>
  );
}