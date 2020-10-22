import { combineReducers } from "redux";
import { todolist } from './TodoList/reducer';

export const appReducer = combineReducers({
  // To fill with separate reducers
  todolist
})

export type IAppState = ReturnType<typeof appReducer>;


/*
  users: {
    list:
    connected:
  },

  conversations: {
    list: [

    ]
  }
*/

/*
  todolist: {
    list: [

    ]
  }
*/