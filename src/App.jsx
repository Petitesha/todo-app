import { useState } from 'react';

import './App.css';

function App() {
  const [todo, setTodo] = useState({
    name: '',
    description: '',
  });
  const [allTodo, setAllTodo] = useState([]);

  // const handleChange = (e) => {
  //   const {name, value} = e.target
  //   // setTodo(prevState => ({...prevState, [name]: value}))
  //   setTodo({
  //     ...todo,
  //     [name]: value
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!!todo.name && !!todo.description) {
      const existingTodo = allTodo.find((value) => value.name === todo.name);
      if (existingTodo) {
        alert('name already exists');
      }
      setAllTodo([{ ...todo }]);
      setTodo({
        ...todo,
        name: '',
        description: '',
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={todo?.name}
            // onChange={handleChange }
            onChange={(e) => setTodo({ ...todo, name: e.target.value })}
          />
        </div>
        <div>
          <label>Description: </label>
          <textarea
            value={todo?.description}
            name="description"
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
        {allTodo.length > 0 &&
          allTodo.map((todo) => (
            <ul key={todo.name}>
              <li>
                {todo.name} {todo.description}
              </li>
            </ul>
          ))}
      </form>
    </>
  );
}

export default App;
