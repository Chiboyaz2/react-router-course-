import type { Todo } from '../types/todo';

const todosData: Todo[] = [
  { id: 1, slug: 'learn-react-router', text: 'Learn React Router', completed: true },
  { id: 2, slug: 'build-todo-app', text: 'Build a todo app', completed: false },
  { id: 3, slug: 'deploy-production', text: 'Deploy to production', completed: false },
  { id: 4, slug: 'adding-todo-list', text: 'Adding another todo list', completed: true },
  { id: 100, slug: 'just-to-be-sure', text: 'Just to be sure ', completed: false },
  { id: 500, slug: 'new-id', text: 'New ID ', completed: true },
  { id: 700, slug: 'large-id', text: 'Large Id  ', completed: true },
];

export default todosData;