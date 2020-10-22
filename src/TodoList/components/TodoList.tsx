import React, { Component, FormEvent, Fragment } from "react";
import { connect } from "react-redux";
import { IAppState } from "../../appReducer";
import { createTodo } from "../actions/createTodo";
import { ITodo } from "../types";
import Todo from "./Todo";

export interface ITodoListProps {
  todos: ITodo[];
  createNewTodo: (todoName: string) => void;
}
export interface ITodoListState {
  newTodoInput: string;
}

class TodoList extends Component<ITodoListProps, ITodoListState> {
  constructor(props: ITodoListProps){
    super(props);
    this.state = {
      newTodoInput: '',
    }
  }

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // ajouter le todo
    this.props.createNewTodo(this.state.newTodoInput);
    this.setState({ newTodoInput: '' });
  }

  handleChange = (newTodoInput: string) => {
    this.setState({newTodoInput: newTodoInput})
  }

  render(){
    return (
      <Fragment>
        <ul>
          {this.props.todos.map((todo, index) =>
            <Todo key={index} todo={todo} />
          )}
        </ul>
        <form data-testid="todolist-form" onSubmit={this.handleSubmit}>
          <input
            name="newTodoInput"
            data-testid="newTodoInput"
            type="text"
            value={this.state.newTodoInput}
            onChange={(e) => this.handleChange(e.target.value)}
          />
          <input type="submit" value="Ajouter"/>
        </form>
      </Fragment>
    )
  }
}

const mapStateToProps = (store: IAppState) => ({
  todos: store.todolist.list
})

const mapDispatchToProps = (dispatch: any) => ({
  createNewTodo: (todoName: string) => { dispatch(createTodo(todoName)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);