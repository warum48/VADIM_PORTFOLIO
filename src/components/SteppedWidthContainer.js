import React, { useEffect, useState, useRef } from "react";
export const SteppedWidthContainer = ({
  children,
  className,
  step,
  spaceAround,
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
      step * Math.floor((window.innerWidth - spaceAround) / step) + "px";
  }
  return (
    <div className={className} ref={steppedWidthContainer}>
      {children}
    </div>
  );
};
