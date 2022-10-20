import { useTaskContext } from "./Context/TaskContext";
import Card from "./Card";

const TaskContainer = () => {
  const { tasks} = useTaskContext();
  
 
  return (
    <div className=" h-full w-full overflow-y-auto  px-10 bg-slate-50">
      <h1 className="my-4 text-center font-serif text-6xl font-bold ">
        Tasks to do
      </h1>
      <div className="lg:grid-cols-2 grid grid-cols-1 place-items-center 2xl:grid-cols-4">
        {tasks.map((task) => (
          <Card task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};
export default TaskContainer;
