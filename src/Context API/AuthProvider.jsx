import { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";



export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [passErrors, setPassErrors] = useState({});
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    fetch("https://cine-hive-server.vercel.app/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);



  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

 


  
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); 
    });

    return () => {
      unSubscribe();
    };
  }, []);

  
  const authInfo = {
    user,
    setUser,
    createUser,
    logInUser,
    logOut,
    error,
    setError,

    movies,
    setMovies,
    loading,
    passErrors,
    setPassErrors,
    
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
