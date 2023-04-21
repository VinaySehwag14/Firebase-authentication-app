import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user]);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      {loading && <div className="text-lg font-medium">Loading...</div>}
      {user && (
        <>
          <h1 className="text-3xl font-bold mb-8">
            Hello World by user {user.email}!
          </h1>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
