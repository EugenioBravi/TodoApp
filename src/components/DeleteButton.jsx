import { useDispatch } from "react-redux";
import { removeTask } from "./store/TaskStore/Task";
const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="ml-auto inline-block rounded-full border border-red-600 bg-red-600 p-3 text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
      onClick={() => dispatch(removeTask(id))}
    >
      <svg
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};
export default DeleteButton;
