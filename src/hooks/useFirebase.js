import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleAuthProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleAuthProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(err=>{
                console.error('Error');
            })
            .finally(() => { setIsLoading(false) })

    }
    ///Observe useState Change

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => { setIsLoading(false) })
    };

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading
    }
}

export default useFirebase;