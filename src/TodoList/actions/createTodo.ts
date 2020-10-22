import { CREATE_TODO, ICreateTodoAction } from "../types";

export function createTodo(todoValue: string): ICreateTodoAction{
  return {
    type: CREATE_TODO,
    todoValue: todoValue
  }
}