"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserDetailsContext } from "@/context/UserDetailsContext";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [userDetails, setUserDetails] = useState<any>();
  useEffect(() => {
    createNewUser();
  }, []);

  const createNewUser = async () => {
    try {
      const result = await axios.post("/api/users");
      console.log(result.data);
      setUserDetails(result.data);
    } catch (error) {
      console.log(error);
      console.log("Error getting the user");
    }
  };

  return (
    <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
      <div>{children}</div>;
    </UserDetailsContext.Provider>
  );
};

export default Provider;
