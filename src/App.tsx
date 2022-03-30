import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lists from "./Components/Lists";

interface Todo {
  id: number;
  text: string;
}
type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number }
  
function App() {
  function reducer(state: Todo[], action: ActionType) {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length + 1,
            text: action.text,
          },
        ];
      case "REMOVE":
        return state.filter(({ id }) => id !== action.id);
    }
    
  }
  
  function getData(){
    const saved = localStorage.getItem('todo')
    if(saved){

      const init = JSON.parse(saved)
      return init
    }
  }
  
  const [todos, dispatch] = useReducer(reducer, getData());
  const newTodoRef = useRef<HTMLInputElement>(null);
  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value,
      });
     

      newTodoRef.current.value = "";
    }
  }, []);
  const onDeleteTodo = (id: number) => {
    dispatch({
      type: "REMOVE",
      id: id,
    });
  };

  return (
    <div className="App">
      <input type="text" ref={newTodoRef} />
      <button onClick={onAddTodo}>Add</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}{" "}
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button> 
          
        </div>
      ))}
    </div>
  );
}

export default App;
