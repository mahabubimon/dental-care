import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const auth = getAuth();

  const registerNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const setNewUser = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const facebookProvider = new FacebookAuthProvider();

  const googleProvider = new GoogleAuthProvider();

  const twitterProvider = new TwitterAuthProvider();

  const facebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const twitterSignIn = () => {
    return signInWithPopup(auth, twitterProvider);
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser("");
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    setUser,
    error,
    setError,
    isLoading,
    setIsLoading,
    registerNewUser,
    setNewUser,
    signIn,
    facebookSignIn,
    googleSignIn,
    twitterSignIn,
    handleLogout,
  };
};

export default useFirebase;
