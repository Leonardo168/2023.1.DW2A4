import React, { useState } from "react"

import Tasks from "./components/Tasks";
import './App.css'
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar DW2A4',
      completed: false,
    },
    {
      id: '2',
      title: 'Estudar SESA4',
      completed: true,
    },
  ]);
  
  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default App;