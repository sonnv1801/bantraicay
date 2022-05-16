import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function HandleLogin(){
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Logged in successfully!")
      }).catch((error) => {
        alert("Login failed! " + error)
      })
    } else {
      alert("Please enter full information!");
    }
}