import React from "react";

export default function Grid({ children, breakout = false, className }) {
  return (
    <div
      className={`${breakout ? "lg:-mx-20" : ""} grid gap-x-4 ` +
        className}
    >
      {children}
    </div>
  );
}
