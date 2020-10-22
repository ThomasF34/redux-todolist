import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { updateTodoDone } from '../actions/updateTodoDone';
import { ITodo } from '../types';

interface ITodoProps {
  todo: ITodo;
  changeTodoDone: (text: string) => void;
}

class Todo extends React.Component<ITodoProps> {
  render(){
    return (
      <Fragment>
        <button onClick={(_e) => this.props.changeTodoDone(this.props.todo.text)}>C'est fait</button>
        <li>Todo : {this.props.todo.text}, Done: {this.props.todo.done.toString()}</li>
      </Fragment>
    )
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  changeTodoDone: (text: string) => { dispatch(updateTodoDone(text)) }
})

export default connect(undefined, mapDispatchToProps)(Todo);