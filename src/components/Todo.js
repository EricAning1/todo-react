import { useState, useEffect } from 'react';
import { getTodo, deleteTodo } from '../services/todos-api';

import { useParams, useNavigate } from 'react-router-dom';
import '../App';

export default function Todo() {
  const nav = useNavigate(); // setting up return to main page
  const { id } = useParams(); // destructuring the id parameter for use
  const [todo, setTodo] = useState({}); // setting up state
  useEffect(() => {
    getTodo(id) //getting the one ToDo from the api using the id
      .then((res) => setTodo(res.data));
  }, []);

  const deleteTheTodo = () => {
    deleteTodo(id); // delete function goes here
    nav('/'); // navigate back to the main screen
  };

  return (
    <div className='todo'>
      <h1>Todo:</h1>
      <h3>{todo.description}</h3>
      Completed: <input type='checkbox' defaultChecked={todo.complete} />
      <button
        onClick={() => {
          nav(`/${id}/edit`);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          nav('/');
        }}
      >
        Main
      </button>
      <button onClick={deleteTheTodo}>Delete</button>
    </div>
  );
}
