import axios from 'axios';
import React, { Component } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

class AddForm extends Component {
  state = {
    title: '',
    description: '',
    doBefore: '',
    imageUrl: '',
    imageIsUploading: false,
  };

  handleImageUpload = (event) => {
    // console.log(event.target.files[0]);
    this.setState({ imageIsUploading: true });

    const uploadData = new FormData();
    uploadData.append('imageUrl', event.target.files[0]);

    axios
      .post(`${process.env.REACT_APP_SERVER_API}/upload`, uploadData)
      .then((result) => {
        // console.log(result.data);
        this.setState({
          imageUrl: result.data.imagePath,
          imageIsUploading: false,
        });
      })
      .catch(() => this.props.history.push('/500'));
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description, doBefore, imageUrl } = this.state;
    axios
      .post(`${process.env.REACT_APP_SERVER_API}/todos/create`, {
        title,
        description,
        doBefore,
        imageUrl,
      })
      .then(() => this.props.history.push('/'))
      .catch(() => this.props.history.push('/500'));
  };

  render() {
    const { title, description, doBefore, imageUrl, imageIsUploading } =
      this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="title"
            value={title}
          />
          <br />
          <label htmlFor="description">Description</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="description"
            value={description}
          />
          <br />
          <label htmlFor="doBefore">Do Before</label>
          <input
            type="date"
            name="doBefore"
            value={doBefore}
            onChange={this.handleChange}
          />
          <br />
          {imageUrl && <img src={imageUrl} alt="todo uploaded" />}
          <PacmanLoader loading={imageIsUploading} size={200} />
          <input
            type="file"
            name="imageUrl"
            onChange={this.handleImageUpload}
          />
          <button type="submit" disabled={imageIsUploading}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddForm;
