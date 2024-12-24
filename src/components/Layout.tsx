import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-custom-dark to-custom-dark/95">
      <main>{children}</main>
    </div>
  );
};