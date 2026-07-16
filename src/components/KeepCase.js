import React from "react";

/** Renders children without inherited lowercase text-transform. */
function KeepCase({ as: Tag = "span", className = "", children, ...rest }) {
  const classes = className ? `keepCase ${className}` : "keepCase";
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}

export default KeepCase;
