import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const totalTasks = tasks.length;

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    console.log(tasks)
  };

  const removeTask = (id) => {
    const taskRemoved = tasks.filter((task) => task.id !== id);
    setTasks(taskRemoved);
    console.log(tasks)
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, totalTasks, addTask, removeTask, clearTasks, }}
    >
      {children}
    </TaskContext.Provider>
  );
};
