import React, { useEffect, useState, useRef } from "react";
export const SteppedWidthContainer = ({
  children,
  className,
  step,
  //minWidth = 0,
  spaceAround,
  padding = 0,
  ...props
}) => {
  const steppedWidthContainer = useRef(null);
  useEffect(() => {
    //"720px";
    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  function onResize() {
    console.log("res", window.innerWidth);
    steppedWidthContainer.current.style.width =
      (step + padding * 2) *
        Math.floor((window.innerWidth - spaceAround) / (step + padding * 2)) +
      "px";
  }
  return (
    <div
      className={className}
      ref={steppedWidthContainer}
      //style={{ minWidth: minWidth }}
      {...props}
    >
      {children}
    </div>
  );
};
