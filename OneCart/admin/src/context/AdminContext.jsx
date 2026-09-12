import React, { useContext, useState, createContext, useEffect } from "react";
import axios from "axios";
import { authDataContext } from "./AuthContext";

export const AdminDataContext = createContext();

function AdminContext({ children }) {

  const [adminData, setAdminData] = useState("");
  const { serverUrl } = useContext(authDataContext);

  const getAdmin = async () => {
    try {
      const result = await axios.get(
        serverUrl + "/api/user/getadmin",
        { withCredentials: true }
      );

      setAdminData(result.data);
      console.log(result.data);

    } catch (error) {
      setAdminData(null);
      console.log(error);
    }
  };

  useEffect(() => {
    getAdmin();
  }, [serverUrl]);

  const value = {
    adminData,
    setAdminData,
    getAdmin
  };

  return (
    <AdminDataContext.Provider value={value}>
      {children}
    </AdminDataContext.Provider>
  );
}

export default AdminContext;