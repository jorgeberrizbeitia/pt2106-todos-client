import React, { Component } from 'react'
import axios from 'axios'

class TodoList extends Component {

  state = {
    listOfTodos: null,
    isLoading: true
  }

  componentDidMount() {
    console.log(process.env.REACT_APP_SERVER_API)
    axios.get(`${process.env.REACT_APP_SERVER_API}/todos/all`)
    .then( (response) => {
      this.setState({ listOfTodos: response.data, isLoading: false })
    })
    .catch( (err) => {
      this.props.history.push("/500")
    });
  }

  render() {

    const { isLoading, listOfTodos } = this.state

    return (
      <div>
        <h2>List of Todos</h2>

        {isLoading && <h1>...isLoading</h1>}

        {!isLoading && listOfTodos.map((oneTodo) => {
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
