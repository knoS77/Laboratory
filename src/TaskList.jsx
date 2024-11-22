import React from 'react';
import { List, ListItem, Button } from '@mui/material';
   const TaskList = ({ tasks, onEdit, onDelete }) => (
       <List>
           {tasks.map(task => (
               <ListItem key={task.id}>
                   <span className='text'>{task.text}</span>
                   <Button onClick={() => onEdit(task.id)}>Редактировать</Button>
                   <Button onClick={() => onDelete(task.id)}>Удалить</Button>
               </ListItem>
           ))}
       </List>
   );

export default TaskList;