export const addTodo = (todo) => {
  return {
    type: "todoList/addTodo",
    payload: todo,
  };
};

export const toggleTodoStatus = (id) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: id,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filter/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filter/statusFilterChange",
    payload: status,
  };
};

export const prioritesFilterChange = (priorities) => {
  return {
    type: "filter/prioritesFilterChange",
    payload: priorities,
  };
};
