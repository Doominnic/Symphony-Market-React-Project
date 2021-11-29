import Footer from "components/Footer";

import MenuLogin from "components/MenuLogin";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div>
        <MenuLogin />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default layout;
