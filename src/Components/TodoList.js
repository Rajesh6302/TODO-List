import React from "react";
import { useState } from 'C:/Users/Rajesh6302/todo-list/node_modules/react/cjs/react.development';
import TodoForm from './TodoForm'
import Todo from "./Todo.js";

export default function TodoList() {

    //state Array which hold all TODO'S
    const [todos,setTodos] = useState([]);

    //Add to todo list
    const addTask = task => {
        if(!task.text) {
            return
        }

        const newTodos = [task, ...todos];
        setTodos(newTodos);
    }

    //Remove todo from list
    const removeTask = id => {
        let updatedTasks = [...todos].filter(task => task.id !== id)
        setTodos(updatedTasks)
    }


    //Task is completed
    const completeTask = id => {
        let updatedTasks = todos.map(todo => {
            if(todo.id === id ) {
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updatedTasks)
    }

    return <div>
        <TodoForm addTask={addTask}></TodoForm>
        <Todo todos = {todos} completeTask={completeTask} removeTask = {removeTask}></Todo>
    </div>;
}