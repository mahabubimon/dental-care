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
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const auth = getAuth();

  const facebookProvider = new FacebookAuthProvider();

  const googleProvider = new GoogleAuthProvider();

  const twitterProvider = new TwitterAuthProvider();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => setUser(result.user))
      .catch((error) => setError(error.message));

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => setUser(result.user))
      .catch((error) => setError(error.message));
  };

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
    onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser({});
      setIsLoading(false);
    });
  }, [auth]);

  const logout = () => {
    signOut(auth).then(() => setUser({}));
  };

  return {
    user,
    setUser,
    error,
    setError,
    handleUser,
    isLogin,
    isLoading,
    setIsLoading,
    toggleLogin,
    handleEmail,
    handlePassword,
    handleRegistration,
    facebookSignIn,
    googleSignIn,
    twitterSignIn,
    logout,
  };
};

export default useFirebase;
