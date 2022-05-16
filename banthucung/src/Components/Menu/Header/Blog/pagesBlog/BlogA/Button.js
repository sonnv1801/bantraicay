import React from "react";
import { Link } from "react-router-dom";
import './ButtonBlog.css'


export default class ButtonBlog extends React.Component {
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
          </label>
          <Link to="/ContentsBlogA"  type="button" className="btn btn-success buttonCard" >Read</Link>
        </form>
      );
    }
  }