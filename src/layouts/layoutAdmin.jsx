import React from "react";

import NavigationBar from "components/NavigationBar";
import ManuBar from "components/ManuBar";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="general-layout">
      <NavigationBar />
      <ManuBar />
      <main>{children}</main>
    </div>
  );
};

export default LayoutAdmin;
