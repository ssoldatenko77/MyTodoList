import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToogle }) => {
  return (
    <div>
      <ul className="list">
        {todos.map((todo, index) => {
          return (
            <TodoItem
              todo={todo}
              index={index}
              key={todo.id}
              onChange={onToogle}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
