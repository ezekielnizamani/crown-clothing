import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedlistner,
  createUserDocumentAuth,
} from "../utils/firebase/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});


export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedlistner((user) => {
      if (user) {
        createUserDocumentAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
