import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialiazeAuthentication  = () =>{

    initializeApp(firebaseConfig);

}

export default initialiazeAuthentication;   