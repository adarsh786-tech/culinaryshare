import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-r from-slate-500 via-blue-900 to-violet-600">
      {children}
    </div>
  );
};
export default Layout;
