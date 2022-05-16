import React from "react";
import HandleRegister from "./HandleRegister";
class SignUp extends React.Component {
  eye() {

    const show = document.querySelector("#password");
    if (show.type === "password") {
      show.type = "text";
    } else {
      show.type = "password";
    }
  }
  eye1() {
    const show1 = document.querySelector("#passwordcf");
    if (show1.type === "password") {
      show1.type = "text";
    } else {
      show1.type = "password";
    }
  }
  render() {
    return (
      <div className="container-fluid container-fluid-tuan">
        <div id="card">
          <div className="container-login">
            <div id="form">
              <div className="container-form">
                <form>
                  <div id="img-login">
                    <h1 className="title">REGISTER</h1>
                  </div>
                  <div className="input-group input-group-lg form-btn">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-lg"
                    >
                      <i className="fa fa-user-plus"></i>
                    </span>
                    <input
                      type="text"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div
                    className="input-group input-group-lg form-btn"
                    id="input-two"
                  >
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-lg"
                    >
                      <i className="fa fa-lock lock-btn"></i>
                    </span>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-lg"
                    >
                       <div className="eye-btn">
                      <i className="fa fa-eye" id="show" onClick={this.eye}></i>
                      </div>
                    </span>
                  </div>

                  <div className="input-group input-group-lg" id="input-two">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-lg"
                    >
                      <i className="fa fa-lock lock-btn"></i>
                    </span>
                    <input
                      type="password"
                      id="passwordcf"
                      className="form-control"
                      placeholder="Confirm your password"
                    />
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-lg"
                    >
                      <div className="eye-btn">
                      <div className="eye-btn">
                      <i className="fa fa-eye" id="show" onClick={this.eye1}></i>
                      </div>
                      </div>
                    </span>
                  </div>

                  <div className="form-check input-btn" id="check-login">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      defaultChecked
                    />
                    <label className="form-check-label">
                      Remember password
                    </label>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary submit-btn"
                    onClick={HandleRegister}
                    id="btn-login"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
