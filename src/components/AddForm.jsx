import axios from "axios";
import React, { Component } from "react";

class AddForm extends Component {
  state = {
    title: "",
    description: "",
    doBefore: "",
  };

  handleChange = (event) => {
    this.setState( { [event.target.name]: event.target.value } )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { title, description, doBefore } = this.state
    axios.post(`${process.env.REACT_APP_SERVER_API}/todos/create`, {
      title,
      description,
      doBefore
    })
    .then( () => this.props.history.push("/"))
    .catch( () => this.props.history.push("/500"));
  }

  render() {
    const { title, description, doBefore } = this.state;

    return (
      <div>
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
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddForm;
