import React, { useEffect, useRef } from "react";

const Popup = ({
  open,
  position,
  onClose,
  width,
  height,
  anchorEl,
  setPopupOpen,
  children,
  offset,
}: any) => {
  const popupRef = useRef(null);

  useEffect(() => {
    setPopupOpen(open);
  }, [open, setPopupOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (open) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    // Update popupRef when the component mounts or anchorEl changes
    if (anchorEl && anchorEl.current) {
      popupRef.current = anchorEl.current;
    }
  }, [anchorEl]);

  const handleClose = () => {
    setPopupOpen(false);
    onClose && onClose();
  };

  const getPopupStyles = () => {
    if (!popupRef.current || !anchorEl || !anchorEl.current) return {};

    const rect = popupRef.current.getBoundingClientRect();
    const anchorRect = anchorEl.current.getBoundingClientRect();

    switch (position) {
      case "top":
        return {
          top: `${anchorRect.top - rect.height}px`,
          left: `${anchorRect.left + anchorRect.width / 2 - rect.width / 2}px`,
        };
      case "bottom":
        return {
          top: `${anchorRect.bottom - 30}px`,
          left: `${
            anchorRect.left + anchorRect.width / 3 - rect.width / 1 - offset
          }px`,
        };
      case "left":
        return {
          top: `${anchorRect.top + anchorRect.height / 2 - rect.height / 2}px`,
          left: `${anchorRect.left - rect.width}px`,
        };
      case "right":
        return {
          top: `${anchorRect.top + anchorRect.height / 2 - rect.height / 2}px`,
          left: `${anchorRect.right}px`,
        };
      default:
        return {};
    }
  };

  return (
    <div
      ref={popupRef}
      style={{
        position: "absolute",
        display: open ? "block" : "none",
        width: `${width}px`,
        height: `${height}px`,
        ...getPopupStyles(),
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        zIndex: 1,
      }}
    >
      {/* Removed close button */}
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

Popup.defaultProps = {
  open: false,
  position: "bottom",
  width: 250,
  height: 200,
};

export default Popup;
