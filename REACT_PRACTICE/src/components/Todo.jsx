import React, { useState } from "react";

const intialValue = {
  title: "",
  description: "",
};
const Todo = () => {
  const [tododata, setTtodoData] = useState([]);
  const [todo, setTodo] = useState(intialValue);
  const [error, setError] = useState(false)

  const handleTodaChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const valiDate = ()=> {
    const newError = {}
    if(todo.title.length === 0){
      newError.title = "Title is required"
    }
    if(todo.description.length === 0){
      newError.description = "Description is required"
    }
    return newError
  }
  console.log(valiDate())

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    const validError = valiDate()
    if(Object.keys(validError).length > 0){
      setError(true)
      return;
    }
    else{
        setError(false)
    }
    if(todo.title.length === 0 || todo.description.length === 0){
      setError(true)
      return;
    }

    setTtodoData([...tododata, todo]);
    setTodo(intialValue);
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleTodoSubmit}>
        <div>
          <div>
            <input
              type="text" name="title" value={todo.title} onChange={handleTodaChange}
            />
            {error && todo.title.length === 0 && <p>title is required</p>}
            
          </div>
          <div>
            <input
              type="text" name="description" value={todo.description} onChange={handleTodaChange}
            />
            {error && todo.description.length === 0 && <p>description is required</p>}
          </div>
          <div> <button
        //    disabled={todo.title.length === 0 || todo.description.length === 0}
           typeof="submit">Add</button> </div>
        </div>
      </form>

      <div>
        <ul>
          {tododata.map((item, i) => {
            return ( <p key={i}> <li>{item.title}</li> <li>{item.description}</li> </p> );
          })}
        </ul>
      </div>
    </>
  );
};

export default Todo;
