import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = createContext();

export function AuthcontextProvider({ children }) {
  const [user, setUser] = useState({});

  const SignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, SignUp, logIn,logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}