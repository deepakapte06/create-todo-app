import React from 'react';
import './Todo.css';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItemAvatar>
            </ListItemAvatar>
            <ListItem>
                <ListItemText primary={props.text} secondary="Dummy Data"  ></ListItemText>
            </ListItem>
        </List>

    )
}

export default Todo
