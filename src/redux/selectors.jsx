import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filter.search;
export const filterStatusSelector = (state) => state.filter.status;
export const filterPrioritiesSelector = (state) => state.filter.priorities;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  filterPrioritiesSelector,
  (todoList, searchText, status, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        if (priorities.length) {
          return (
            todo.name.includes(searchText) && priorities.includes(todo.priority)
          );
        }
        return todo.name.includes(searchText);
      }

      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : true)
      );
    });
  }
);
