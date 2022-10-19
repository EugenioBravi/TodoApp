import { useTaskContext } from "./Context/TaskContext";
import Card from "./Card";

const TaskContainer = () => {
  const {tasks} = useTaskContext()
  return <div className="h-full w-full bg-green-100 px-10">
    <h1 className="font-bold font-serif text-center my-4 text-6xl ">Tasks to do</h1>
    {
      tasks.map(task => <Card task={task} key={task.id}/>)
    }
    
  </div>;
};
export default TaskContainer;
