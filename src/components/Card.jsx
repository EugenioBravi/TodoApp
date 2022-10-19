import { useTaskContext } from "./Context/TaskContext";
import DeleteButton from "./DeleteButton";

const Card = ({ task ,remove}) => {
  
  return (
    <div className="group mb-4 block h-56 w-[300px]">
      
      <div className="relative flex h-full items-start rounded-3xl border-4 border-black bg-white p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]">
        
        <div className="group-hover:absolute group-hover:opacity-0">
          <span className="text-xl" role="img" aria-hidden="true">
            📆 {task.date}
          </span>
          <p className="mt-4 text-xl font-bold uppercase sm:text-2xl">
            {task.info.task}
          </p>
        </div>
        
        <div className="absolute opacity-0 group-hover:relative group-hover:opacity-100">
          <h3 className="text-2xl font-bold uppercase">{task.info.task}</h3>

          <p className="mt-4 text-lg font-medium leading-relaxed">
            {task.info.description}
          </p>
        </div>
        <DeleteButton remove={remove} id={task.id}/>
      </div>
    </div>
  );
};
export default Card;
