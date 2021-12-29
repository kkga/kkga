import React from "react";

export default function Grid({ children, breakout = false, className }) {
  return (
    <div
      className={`${breakout ? "lg:-mx-24" : ""} grid gap-x-8 ` +
        className}
    >
      {children}
    </div>
  );
}
