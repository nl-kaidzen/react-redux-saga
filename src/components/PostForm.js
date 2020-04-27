import React from 'react';
import { createPost, showAlert } from './../redux/actions';
import { connect } from 'react-redux';
import Alert from './Alert';

class PostForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
    }
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { title } = this.state;

    if (!title.trim()) {
      return this.props.showAlert('Название поста не может быть пустым');
    }
    const newPost = {
      title,
      id: Date.now().toString(36),
    };
    this.props.createPost(newPost);
    this.setState({ title: '' });
  }

  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value }
    }))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className="pb-3">

        {this.props.alert && <Alert text={this.props.alert}/>}

        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            className="form-control"
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler} />
        </div>
        <button className="btn btn-success" type="submit">Создать</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  alert: state.app.alert
});

const mapDispatchToProps = {
  createPost,
  showAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)