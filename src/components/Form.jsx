import { useTaskContext } from "./Context/TaskContext";
import { v4 as uuid } from "uuid";
import { useState } from "react";
const Form = () => {
  const [task, setTask] = useState({
    task: "",
    description: "",
    date: "",
  });
  const { addTask } = useTaskContext();
  const unique_id = uuid();

  const handleInputChange = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  const sendTask = (event) => {
    event.preventDefault();

    const taskId = {
      info: task,
      id: unique_id,
    };

    addTask(taskId);
    event.target.reset();
  };

  return (
    <div className=" m-2 w-full rounded-lg bg-white py-4 px-6 shadow-xl">
      <h1 className="mb-7 text-center font-serif text-xl font-bold">
        What do you have ToDo
      </h1>
      <form onSubmit={sendTask} className="space-y-4">
        <div>
          <label className="sr-only" htmlFor="task">
            Task
          </label>
          <input
            className="w-full rounded-lg border-gray-400 p-3 text-sm"
            placeholder="Task"
            name="task"
            required
            onChange={handleInputChange}
            type="text"
            id="task"
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="description">
            Description
          </label>
          <textarea
            className="w-full rounded-lg border-gray-400 p-3 text-sm"
            placeholder="Description"
            name="description"
            required
            onChange={handleInputChange}
            rows="8"
            id="description"
          ></textarea>
        </div>
        <div className="mt-5">
          <label
            htmlFor="date"
            className="mb-3 block text-base  font-medium text-[#07074D]"
          >
            Date
          </label>
          <input
            type="date"
            name="date"
            required
            id="date"
            onChange={handleInputChange}
            className="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] "
          />
        </div>
        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white "
          >
            <span className="font-medium"> Add </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
