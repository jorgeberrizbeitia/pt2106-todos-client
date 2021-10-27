import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TodoDetails extends Component {
  state = {
    singleTodo: null,
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_API}/todos/${this.props.match.params.id}`
      )
      .then((response) =>
        this.setState({ singleTodo: response.data, isLoading: false })
      )
      .catch(() => this.props.history.push('/500'));
  }

  handleDelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_SERVER_API}/todos/${this.props.match.params.id}`
      )
      .then(() => this.props.history.push('/'))
      .catch(() => this.props.history.push('/500'));
  };

  render() {
    const { isLoading, singleTodo } = this.state;

    return (
      <div>
        <h2>Todo Details</h2>

        {isLoading && <h1>...Loading</h1>}

        {!isLoading && (
          <div>
            <h4>Title: {singleTodo.title} </h4>
            <p>Description: {singleTodo.description}</p>
            {/* <p>Do Before: {singleTodo.doBefore.slice(0, 10)} </p> */}
            <p>Do Before: {new Date(singleTodo.doBefore).toDateString()} </p>
            {singleTodo.imageUrl && (
              <img src={singleTodo.imageUrl} alt="todo" />
            )}
            <button onClick={this.handleDelete}>DELETE</button>

            <Link to={`/todo/${singleTodo._id}/edit`}>
              <button>EDIT</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default TodoDetails;
