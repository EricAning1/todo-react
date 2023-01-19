import { getTodos } from '../services/todos-api';
import { useState, useEffect } from 'react';
import Create from './CreateTodo';
import '../App.css';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos() // calling the function to get the data
      .then((res) => setTodos(res.data)); // setting state with returned data
  }, []);
  console.log(todos);
  return (
    <div className='list'>
      <ul>
        {todos.map((todo) => {
          return (
            <li>
              <a href={`/${todo._id}`}>{todo.description}</a>
            </li>
          );
        })}
      </ul>
      <Create />
    </div>
  );
}
