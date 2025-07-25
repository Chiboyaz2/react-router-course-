import { Link } from 'react-router-dom'
import type { Todo } from '../types/todo'

const todos: Todo[] = [
  { id: 1, text: 'Learn React Router', completed: true },
  { id: 2, text: 'Build a todo app', completed: false },
  { id: 3, text: 'Deploy to production', completed: false },
]

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
  )
}