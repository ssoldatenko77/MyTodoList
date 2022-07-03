import React from 'react'
import { useContext } from 'react'
import MyButton from '../UI/button/MyButton'
import Context from '../Context'

const TodoItem = ({todo,index, onChange}) => {
     const{removeTodo} = useContext(Context)
    const classes = []
    if(todo.complited){
        classes.push('done')
    } 

  return (
    <li className = "itam">
        <span className = {classes.join(' ')}>
            <input className='int'
             type = "checkbox" 
             checked = {todo.complited}
             onChange={() => onChange(todo.id)}
             />
                 <strong>{index +1}</strong>
                 &nbsp;
                 {todo.title}
                 
        </span>
        <MyButton onClick = {() => removeTodo(todo.id)}>Remove</MyButton>
        </li>
  )
}

export default TodoItem
