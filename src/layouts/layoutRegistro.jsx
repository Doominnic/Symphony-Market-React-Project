import React from "react";

import MenuRegistro from "components/MenuRegistro";

const layoutRegistro = ({ children }) => {
  return (
    <div>
      <div>
        <MenuRegistro />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default layoutRegistro;
