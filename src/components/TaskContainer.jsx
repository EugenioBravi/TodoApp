import Card from "./Card";
import { useSelector } from "react-redux";
const TaskContainer = () => {
  const tasks = useSelector((state) => state.tasks);
  
  return (
    <div className=" h-full w-full overflow-y-auto  bg-slate-50 px-10">
      <h1 className="my-4 text-center font-serif text-6xl font-bold ">
        Tasks to do
      </h1>
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 2xl:grid-cols-4">
        {tasks.map((task) => (
          <Card task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};
export default TaskContainer;
