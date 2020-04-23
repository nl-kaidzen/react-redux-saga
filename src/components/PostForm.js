import React from 'react';

export default class PostForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
    }
  }

  submitHandler = (event) => {
    event.preventDefault();

    const {title} = this.state;
    const newPost = {
      title,
      id: Date.now().toString(36),
    };
    console.log(newPost);
    this.setState({ title: '' });
  }

  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{[event.target.name]: event.target.value}
    }))
  }

  render() {
    return(
      <form onSubmit={this.submitHandler} className="pb-3">
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input 
            className="form-control"
            type="text"
            id="title"
            name="title"
            value={this.state.title} 
            onChange={this.changeInputHandler}/>
        </div>
        <button className="btn btn-success" type="submit">Создать</button>
      </form>
    )
  }
}