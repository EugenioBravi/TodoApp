import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskStore/Task";
export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
