import React from 'react';
import TodoList from './TodoList/components/TodoList';

class AppContent extends React.Component {
  render(){
    return (
      <>
        <h1>Accueil</h1>
        <TodoList />
      </>
    )
  }
}

export default AppContent;