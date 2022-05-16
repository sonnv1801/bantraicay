import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import HomePage from "./HomePage";
import { auth } from "./firebase-config";
import SignUpAndLogin from "./SignUpAndLogin/SignUpAndLogin";

export default class Conect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.authListening = this.authListening.bind(this);
  }

  componentDidMount() {
    this.authListening();
  }

  authListening() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div>

        {this.state.user ? <HomePage /> : <SignUpAndLogin />}
      </div>
    );
  }
}
