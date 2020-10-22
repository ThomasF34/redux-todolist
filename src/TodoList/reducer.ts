import { ITodoListState, CREATE_TODO, TodoAction, UPDATE_TODO_DONE } from "./types";

const defaultTodoListState = {
  list: [
    { text: 'Finir le jour 14', done: true},
    { text: 'Apprendre Redux', done: false},
    { text: 'Progresser grâce à RebootJS', done: false}
  ]
}

export function todolist(state: ITodoListState = defaultTodoListState, action: TodoAction) : ITodoListState {
  switch(action.type){
    case CREATE_TODO:
      return {
        list: [
          ...state.list,
          {
            text: action.todoValue,
            done: false
          }
        ]
      }
    case UPDATE_TODO_DONE:
      return {
        list: state.list.map(todo => {
          if(todo.text === action.textTodo){
            return { ...todo, done: !todo.done }
          }
          return todo
        })
      }
    default:
      return state
  }
}