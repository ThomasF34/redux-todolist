import { IUpdateTodoAction, UPDATE_TODO_DONE } from "../types";

export function updateTodoDone(textTodo: string): IUpdateTodoAction{
  return {
    type: UPDATE_TODO_DONE,
    textTodo: textTodo
  }
}