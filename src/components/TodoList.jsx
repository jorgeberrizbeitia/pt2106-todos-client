import React, { Component } from 'react'
import axios from 'axios'

class TodoList extends Component {

  state = {
    listOfTodos: null,
    isLoading: true
  }

  componentDidMount() {
    axios.get("http://localhost:5005/api/todos/all")
    .then( (response) => {
      this.setState({ listOfTodos: response.data, isLoading: false })
    })
    .catch( (err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>List of Todos</h2>

        {this.state.isLoading && <h1>...isLoading</h1>}

        {!this.state.isLoading && this.state.listOfTodos.map((oneTodo) => {
          return (
            <div>
              <p>{oneTodo.title}</p>
            </div>
          )
        })}

      </div>
    )
  }
}

export default TodoList
