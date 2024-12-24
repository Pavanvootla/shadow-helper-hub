import React from "react";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-custom-dark to-custom-dark/95">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};