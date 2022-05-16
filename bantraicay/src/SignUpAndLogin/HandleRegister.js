import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function HandleRegister(){
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const passwordcf = document.querySelector("#passwordcf").value;
    if (email !== "" && password !== "" && passwordcf !== "") {
      if(password === passwordcf) {
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Register Success!");
        })
        .catch((error) => {
          alert("Registration failed! " + error);
        });
      }else{
        alert("Re-enter password does not match!");
      }
    } else {
      alert("Please enter full information!");
    }
}