import React, { useState } from 'react'
import './App.css';
import Context from './Context';
import TodoList from './todo/TodoList';
import MyInput from './UI/button/input/MyInput';

import MyButton from './UI/button/MyButton';

function App() {
  const [title, setTitle] = useState('')
 const [todos,setTodos] = useState([

  // {id:1, complited:false, title:'Купить хлеб'},
  // {id:2, complited:false, title:'Купить масло'},
  // {id:3, complited:false, title:'Купить икру'},
 ])
 const toogleTodo = (id) => {
  setTodos(todos.map((todo) => {
    if(todo.id === id) {
      todo.complited = !todo.complited
    }
    return todo
  }))
 }
  const removeTodo = (id) => {
    setTodos (
      todos.filter(todo => 
        todo.id !== id
      )
    )
  }
  const addTodo = (e) => {
  e.preventDefault()
    const newTodo = {
      id:Date.now(),
      title,
      complited:false
    }
    setTodos([...todos, newTodo])
    setTitle('')
   }

  return (
    <Context.Provider value = {{removeTodo}}>
    <div className="App">
        <h1>Список дел :</h1>
        <form>
          <MyInput type="text"
           placeholder='Введите новое дело'
           value={title}
           onChange={event => setTitle(event.target.value)}
           />
          <MyButton onClick = {addTodo}>Add</MyButton>
        </form>
        {todos.length ?
        <TodoList todos={todos} onToogle = {toogleTodo}/>
        : <p>Дел нет !</p>}
    </div>
    </Context.Provider>
  );
}

export default App;
