import { TaskContextProvider } from "./components/Context/TaskContext"
import ToDoFront from "./components/ToDoFront"


function App() {
  
  return (
    <>
      <TaskContextProvider>
      <ToDoFront/>
      </TaskContextProvider>
    </>
  )
}

export default App
