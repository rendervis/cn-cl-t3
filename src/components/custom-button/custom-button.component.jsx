import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, inverted, isGoogleSignIn, ...props }) => (
  <button
    className={` ${inverted ? "inverted" : ""}  ${
      isGoogleSignIn ? "google-sign-in" : ""
    }   custom-button`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
