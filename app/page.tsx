"use client";

import React, { useState } from "react";

export default function ToDoApp() {
const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<{ id: number; task: string; completed: boolean }[]>([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), task, completed: false }]);
      setTask("");
    }
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t ));};
 const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };
 return (
<div className="container">
<h1 className="heading">Plan It. Do It. Achieve It!</h1>
<p className="quote">“The best way to get things done is to begin.”</p>
<div className="input-container"> <input
className="input"type="text"
value={task}onChange={(e) => setTask(e.target.value)}placeholder="Add a new task"/>
<button className="button" onClick={addTask}>
 Add Task
</button>
</div>
<ul className="task-list">
{tasks.map((t, index) => (<li key={t.id} className="task-item">
<span style={{ textDecoration: t.completed ? "line-through" : "none" }}>
{index + 1}. {t.task}</span>
<div><button
className={`complete-button ${ t.completed ? "completed" : "incomplete" }`}
 onClick={() => toggleTaskCompletion(t.id)}>
 {t.completed ? "Mark Incomplete" : "Mark Completed"}
</button>
 {t.completed && (<button className="delete-button" onClick={() => deleteTask(t.id)}> Delete </button>)}
 {t.completed && <span className="stars">⭐ Keep it up!</span>}
</div></li> ))}
</ul>
</div>
  );
}

















