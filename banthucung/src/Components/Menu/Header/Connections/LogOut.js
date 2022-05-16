import { getAuth, signOut } from "firebase/auth";

export default function LogOut(){
    const auth = getAuth();
    signOut(auth).then(() => {
        console.log("Sign out successful");
    }).catch((error) => {
        console.log("Logout failed" + error);
    });
}
