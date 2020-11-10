import React, { useState } from 'react';
import './styles/form.css';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.state = { password: ''}
  }
  myChangeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.email +", and password:" + this.state.password);
  }

  render() {
    let header = '';
    if (this.state.email) {
      header = <h1>Hello {this.state.email}</h1>;
    } else {
      header = '';
    }
    return (
      <form id ="form" onSubmit = {this.mySubmitHandler}>
      {header}
      <p>Login</p>
      <input type="text"
        name = 'email'
        placeholder='email'
        onChange={this.myChangeHandler}
      />
      <input type="password"
        name = 'password'
        placeholder='password'
        onChange={this.myChangeHandler}
      />
      <button type="submit">Login</button>
      </form>
    );
  }
}

export default MyForm;