import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,
  signOut, TwitterAuthProvider
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState("");

    const auth = getAuth();

    const facebookProvider = new FacebookAuthProvider();

    const googleProvider = new GoogleAuthProvider();

    const twitterProvider = new TwitterAuthProvider();

    const handleEmail = (e) => {
      setEmail(e.target.value)
    }
    const handleUser = (e) => {
      setUser(e.target.value)
    }
    const handlePassword = (e) => {
      setPassword(e.target.value)
    }

    const toggleLogin = e => {
      setIsLogin(e.target.checked);
    }

    const handleRegistration = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
      .then(result => setUser(result.user))
      .catch(error => setError(error.message));
      
      signInWithEmailAndPassword(auth, email, password)
      .then(result => setUser(result.user))
      .catch(error => setError(error.message));
    }

    const facebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
        .then(result => setUser(result.user))
        .catch(error => setError(error.message));
    }

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => setUser(result.user))
        .catch(error => setError(error.message));
    }

    const twitterSignIn = () => {
      signInWithPopup(auth, twitterProvider)
      .then(result => setUser(result.user))
      .catch(error => setError(error.message));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
          user ? setUser(user) : setUser({})
          });
      }, [auth]);

      const logout = () => {
        signOut(auth)
        .then(() => setUser({}));
      }

    return {
        user,
        error,
        handleUser,
        isLogin,
        toggleLogin,
        handleEmail,
        handlePassword,
        handleRegistration,
        facebookSignIn,
        googleSignIn,
        twitterSignIn,
        logout
    }
};

export default useFirebase;