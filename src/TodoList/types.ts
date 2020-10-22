export interface ITodoListState {
  list: ITodo[]
}

export interface ITodo {
  text: string;
  done: boolean;
}



export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO_DONE = 'UPDATE_TODO_DONE';

export interface IUpdateTodoAction {
  type: typeof UPDATE_TODO_DONE,
  textTodo: string
}

export interface ICreateTodoAction {
  type: typeof CREATE_TODO,
  todoValue: string
}

export type TodoAction = ICreateTodoAction | IUpdateTodoAction;


