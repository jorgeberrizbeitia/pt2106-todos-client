import axios from 'axios'
import React, { Component } from 'react'

class TodoEdit extends Component {

  state = {
    title: "",
    description: "",
    doBefore: ""
  }

  handleChange = (event) => {
    this.setState( { [event.target.name]: event.target.value } )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { title, description, doBefore } = this.state
    axios.patch(`${process.env.REACT_APP_SERVER_API}/todos/${this.props.match.params.id}`, {
      title,
      description,
      doBefore
    })
    .then( () => this.props.history.push("/"))
    .catch( (err) => this.props.history.push("/500"));
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_SERVER_API}/todos/${this.props.match.params.id}`)
    .then( (response) => {
      this.setState({ 
      title: response.data.title,
      description: response.data.description,
      doBefore: response.data.doBefore.slice(0, 10)
    })})
    .catch( (err) => console.log(err));
  }

  render() {
    const { title, description, doBefore } = this.state;
    return (
      <div>
        <h2>Todo Edit</h2>

        <form onSubmit={this.handleSubmit} >
          <label htmlFor="title">Title</label>
          <input onChange={this.handleChange} type="text" name="title" value={title} />
          <br />
          <label htmlFor="description">Description</label>
          <input onChange={this.handleChange} type="text" name="description" value={description} />
          <br />
          <label htmlFor="doBefore">Do Before</label>
          <input onChange={this.handleChange} type="date" name="doBefore" value={doBefore} />
          <br />
          <button type="submit">Edit</button>
        </form>
      </div>
    )
  }
}

export default TodoEdit
