import ListItem from '@mui/material/ListItem';
import TextField from "@mui/material/TextField"
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Create from "@mui/icons-material/Create";


export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("");

    const handleChange = (evt) => {
        setText(evt.target.value);
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="What will I do?"
                    variant="outlined"
                    placeholder="Todo"
                    value={text}
                    onChange={handleChange}
                    InputProps={
                        {
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton aria-label='create todo' edge="end">
                                        <Create />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }
                    }

                />
            </form>
        </ListItem>
    )
}