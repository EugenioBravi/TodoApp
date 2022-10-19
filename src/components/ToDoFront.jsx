import SideMenu from "./SideMenu";
import TaskContainer from "./TaskContainer";

const ToDoFront = () => {
  return (
    <div className=" h-screen w-screen flex">
      <SideMenu />
      <TaskContainer />
    </div>
  );
};
export default ToDoFront;
