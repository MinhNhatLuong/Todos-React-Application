import List from '@mui/material/List';
import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const initialTodos = [
    {
        id: 1,
        text: "Walk the dog",
        completed: false
    },
    {
        id: 2,
        text: "Walk the cat",
        completed: true
    },
    {
        id: 3,
        text: "Walk the chicken",
        completed: false
    },
    {
        id: 4,
        text: "Walk the fish",
        completed: false
    }
]

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

    const removeTodo = (id) => {
        setTodos(curTodos => {
            return todos.filter(todo => todo.id !== id)
        });
    }

    const toggleTodo = (id) => {
        setTodos(curTodos => {
            return todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo;
                }
            })
        })
    }

    const addTodo = (txt) => {
        setTodos(curTodos => {
            return [
                ...curTodos,
                {
                    id: 8,
                    text: txt,
                    completed: false
                }
            ]
        })
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                />
            ))}
            <TodoForm addTodo={addTodo} />
        </List>
    )
}