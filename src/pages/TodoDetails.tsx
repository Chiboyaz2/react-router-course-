import { useParams } from 'react-router-dom'
import type { Todo } from '../types/todo'

const todos: Todo[] = [
  { id: 1, text: 'Learn React Router', completed: true },
  { id: 2, text: 'Build a todo app', completed: false },
  { id: 3, text: 'Deploy to production', completed: false },
]

export default function TodoDetails() {
  // Update the params type to include index signature
  interface Params extends Record<string, string | undefined> {
    id: string
  }
  
  const { id } = useParams<Params>()
  const todo = todos.find(todo => todo.id === parseInt(id as string))

  if (!todo) {
    return <div>Todo not found</div>
  }

  return (
    <div>
      <h1>Todo Details</h1>
      <p>ID: {todo.id}</p>
      <p>Text: {todo.text}</p>
      <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
    </div>
  )
}