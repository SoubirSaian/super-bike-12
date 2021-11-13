import { useEffect, useState } from "react";
import initialiazeAuthentication from "../firebase/firebase.init";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,updateProfile,signOut} from 'firebase/auth';


initialiazeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const [admin,setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
       
    //   create user by registration 
    const registerUser = (name,email,password,history) =>{

        setIsLoading(true);

        createUserWithEmailAndPassword(auth,email,password)
            .then(result =>{
                const newUser ={email, displayName: name};
                // storing user email with name in firebase 
                setUser(newUser);
                // storing user info to db 
                saveUser(email,name,'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                     setError(error.message);
                  });

                setError('');
                history.replace("/");
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
            const user = result.user;
            saveUser(user.email,user.displayName,'PUT')

            // const redirect_uri = location?.state?.from || "/";
            // history.replace(redirect_uri);

             setError('');
         })
         .catch(error =>{
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

    // check a user is admin or not 
    useEffect(()=>{
        fetch(` https://enigmatic-mesa-30035.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin));
    },[user.email]);

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

    // save user info to database 
    const saveUser = (email,displayName,apiMethod)=>{
        const userInfo = {email,displayName};
        fetch(' https://enigmatic-mesa-30035.herokuapp.com/users', {
            method : apiMethod,
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(userInfo)
        })
        
        .then()
    }

    return {
        user,
        error,
        isLoading,
        admin,
        registerUser,
        loginUser,
        googleSignIn,
        logOut
    };

}


export default useFirebase;