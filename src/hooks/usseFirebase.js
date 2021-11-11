import { useEffect, useState } from "react";
import initialiazeAuthentication from "../firebase/firebase.init";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut} from 'firebase/auth';


initialiazeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] = useState('');
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
       
    //   create user by registration 
    const registerUser = (email,password,location,history) =>{

        setIsLoading(true);

        createUserWithEmailAndPassword(auth,email,password)
            .then(result =>{
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(()=>{
                setIsLoading(false);
            });
    }

    // login user 
    const loginUser = (email,password)=>{

        setIsLoading(true);

        signInWithEmailAndPassword(auth,email,password)
            .then(result => {
                setUser(result.user);
            })
            .catch(error =>{
                setError(error.message);
            })
            .finally(()=>{
                setIsLoading(false);
            });
    }

    // google sign in 
    const googleSignIn =(location,history)=>{

        setIsLoading(true);

        signInWithPopup(auth,googleProvider)
         .then(result => {
            //  setUser(result.user);
            const redirect_uri = location?.state?.from || "/";
            history.replace(redirect_uri);
             setError('');
         })
         .then(error =>{
             setError(error.message);
         })
         .finally(()=>{
             setIsLoading(false);
         });
    }

    // set auth observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }

            setIsLoading(false);
        });

        return ()=> unsubscribe;

    },[auth]);

    // logout user 
    const logOut =()=>{

        setIsLoading(true);

        signOut(auth)
            .then(()=>{
                setUser({});
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(()=>{
                setIsLoading(false);
            });

    }


    return {
        user,
        error,
        isLoading,
        registerUser,
        loginUser,
        googleSignIn,
        logOut
    };

}


export default useFirebase;