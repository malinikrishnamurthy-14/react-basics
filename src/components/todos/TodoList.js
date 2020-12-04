import React from 'react'
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem'

const TodoList = ({ todos = []}) => {
    return (
        <div>
            <NewTodoForm />
            <div>{todos.map((todo) => (<TodoListItem todo={todo} />))}</div>
        </div>
    )

}

export default TodoList;