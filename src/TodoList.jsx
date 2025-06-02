import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box, Typography } from "@mui/material"

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if (!data) {
        return []
    }
    return data
}

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

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
                    id: crypto.randomUUID(),
                    text: txt,
                    completed: false
                }
            ]
        })
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: "column",
            alignItems: 'center'
        }}>
            <Typography variant='h2' component="h1" sx={{ flexGrow: 1 }}>
                Todos List
            </Typography>
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
        </Box>
    )
}