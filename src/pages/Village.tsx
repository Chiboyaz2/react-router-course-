import { Link } from 'react-router-dom';
import village from '../data/village'

export default function Village() {
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {village.map(village => (
          <li key={village.id}>
            <Link to={`/todos/${village.id}`}>{village.villageNmae}</Link>
            <p>{village.isLarge && '(Very big)'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
} 