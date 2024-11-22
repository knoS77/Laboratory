import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

   const AddTask = ({ onAdd }) => {
       const [taskText, setTaskText] = useState('');

       const handleAdd = () => {
           onAdd({ id: Date.now(), text: taskText });
           setTaskText('');
       };
       
       return (
           <div>
               <TextField
                   label="Новая задача"
                   value={taskText}
                   onChange={(e) => setTaskText(e.target.value)}
                />
               <Button onClick={handleAdd}>Добавить</Button>
           </div>
       );
   };

export default AddTask;