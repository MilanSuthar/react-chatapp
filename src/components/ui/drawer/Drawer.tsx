// Drawer.js

import React, { useEffect, useRef } from "react";

const Drawer = ({
  isOpen,
  onClose,
  children,
  placement = "left",
  width = "300px",
  height = "100%",
}: any) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target) &&
        isOpen
      ) {
        onClose && onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const drawerStyles = {
    position: "fixed",
    background: "#fff",
    overflowY: "hidden",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    zIndex: 1001,
    width: width,
    height: height,
    transition: "transform 0.5s ease-in-out",
    ...getPlacementStyles(placement),
  };

  return isOpen ? (
    <div ref={drawerRef} style={drawerStyles}>
      {children}
    </div>
  ) : null;
};

const getPlacementStyles = (placement) => {
  switch (placement) {
    case "left":
      return { left: 0, top: 0, height: "100%", transform: "translateX(0%)" };
    case "right":
      return { right: 0, top: 0, height: "100%", transform: "translateX(0%)" };
    case "top":
      return { top: 0, left: 0, width: "100%", transform: "translateY(0%)" };
    case "bottom":
      return { bottom: 0, left: 0, width: "100%", transform: "translateY(0%)" };
    default:
      return {};
  }
};

export default Drawer;
