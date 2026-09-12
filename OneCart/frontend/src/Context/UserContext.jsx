import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { authDataContext } from "./AuthContext";
import axios from "axios";

export const userDataContext = createContext();

function UserContext({ children }) {
  // ================= USER DATA =================

  const [userData, setUserData] = useState(null);

  // ================= LOADING =================

  const [loading, setLoading] = useState(true);

  // ================= AUTH CONTEXT =================

  const { serverUrl } = useContext(authDataContext);

  // ======================================================
  // GET CURRENT USER
  // ======================================================

  const getCurrentUser = async () => {
    try {
      const result = await axios.get(
        serverUrl + "/api/user/getcurrentuser",
        {
          withCredentials: true,
        }
      );

      setUserData(result.data);

      console.log("Current User:", result.data);

      return result.data;
    } catch (error) {
      setUserData(null);

      console.log(
        "Get Current User Error:",
        error.response?.data || error.message
      );

      return null;
    } finally {
      setLoading(false);
    }
  };

  // ======================================================
  // CHECK USER WHEN APP STARTS
  // ======================================================

  useEffect(() => {
    getCurrentUser();
  }, []);

  // ======================================================
  // CONTEXT VALUE
  // ======================================================

  const value = {
    userData,
    setUserData,
    getCurrentUser,
    loading,
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserContext;