import {
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const auth = getAuth();

  const facebookProvider = new FacebookAuthProvider();

  const googleProvider = new GoogleAuthProvider();

  const twitterProvider = new TwitterAuthProvider();

  const facebookSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const twitterSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser({});
      setIsLoading(false);
    });
  }, [auth]);

  const handleLogout = () => {
    setIsLoading(true);
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
    facebookSignIn,
    googleSignIn,
    twitterSignIn,
    handleLogout,
  };
};

export default useFirebase;
