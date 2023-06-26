import React, { useState } from "react";

import "./AddTask.css";
import Button from "./Button";

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChance = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        if (inputData ===""){
            alert('Você não pode adicionar uma tarefa sem título');
        } else {
            handleTaskAddition(inputData);
            setInputData('');
        }
    };

    return (
        <div className="add-task-container">
            <input 
                onChange={handleInputChance}
                value={inputData}
                className="add-task-input"
                type="text"
                name="titulo"
            />;
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
};
 
export default AddTask;