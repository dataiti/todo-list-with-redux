import { combineReducers } from "redux";
import filterReducer from "../components/Filters/filterSlice";
import todoListReducer from "../components/TodoList/todoListSlice";

const rootReducer = combineReducers({
  filter: filterReducer,
  todoList: todoListReducer,
});

export default rootReducer;
