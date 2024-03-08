"use client";
import React, { useState } from "react";
import { getUserInfo } from "@/utils/auth";

const Dashboard = () => {
  const userData = getUserInfo();

  return (
    <div className="flex justify-center items-center h-screen text-4xl">
      Hello {userData?.fullname}
    </div>
  );
};

export default Dashboard;
