"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Popover({
  trigger,
  children,
  position = "bottom",
  offset = 8,
}) {
  const triggerRef = useRef(null);
  const popoverRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  // Calculate position
  const updatePosition = () => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (position) {
      case "top":
        top = rect.top - offset;
        left = rect.left + rect.width / 2;
        break;
      case "bottom":
        top = rect.bottom + offset;
        left = rect.left + rect.width / 2;
        break;
      case "left":
        top = rect.top + rect.height / 2;
        left = rect.left - offset;
        break;
      case "right":
        top = rect.top + rect.height / 2;
        left = rect.right + offset;
        break;
      default:
        break;
    }

    setCoords({ top, left });
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  // Update position when opened
  useEffect(() => {
    if (isOpen) updatePosition();
  }, [isOpen]);

  return (
    <>
      <span
        ref={triggerRef}
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ display: "inline-block" }}
      >
        {trigger}
      </span>

      {isOpen &&
        createPortal(
          <div
            ref={popoverRef}
            style={{
              position: "fixed",
              top: coords.top,
              left: coords.left,
              transform:
                position === "top" || position === "bottom"
                  ? "translateX(-50%)"
                  : "translateY(-50%)",
              zIndex: 9999,
            }}
          >
            {children}
          </div>,
          document.body,
        )}
    </>
  );
}
