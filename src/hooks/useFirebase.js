import {
    getAuth,
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    TwitterAuthProvider,
    onAuthStateChanged, 
    signInWithPopup, 
    signOut
  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const auth = getAuth();

    const facebookProvider = new FacebookAuthProvider();

    const googleProvider = new GoogleAuthProvider();

    const gitHubProvider = new GithubAuthProvider();

    const twitterProvider = new TwitterAuthProvider();

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

    const gitHubSignIn = () => {
      signInWithPopup(auth, gitHubProvider)
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
        facebookSignIn,
        googleSignIn,
        gitHubSignIn,
        twitterSignIn,
        logout
    }
};

export default useFirebase;