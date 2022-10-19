import { useTaskContext } from "./Context/TaskContext";
import Card from "./Card";

const TaskContainer = () => {
  const { tasks, removeTask} = useTaskContext();
  
  const remove= (id) =>{
    removeTask(id)
  }
  return (
    <div className=" h-full w-full overflow-y-auto bg-green-100 px-10">
      <h1 className="my-4 text-center font-serif text-6xl font-bold ">
        Tasks to do
      </h1>
      <div className="lg:grid-cols-2 grid grid-cols-1 place-items-center 2xl:grid-cols-4">
        {tasks.map((task) => (
          <Card task={task} key={task.id} remove={remove}/>
        ))}
      </div>
    </div>
  );
};
export default TaskContainer;
