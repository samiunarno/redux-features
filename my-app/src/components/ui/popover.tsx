"use client"

import * as React from "react";

interface PopoverProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Popover({ open, onOpenChange, children }: PopoverProps) {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {children}
      {/* Optional: Close popover on outside click */}
      {open && (
        <div
          onClick={() => onOpenChange(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
          }}
        />
      )}
    </div>
  );
}

interface PopoverTriggerProps {
  asChild?: boolean;
  children: React.ReactElement;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PopoverTrigger({
  children,
  open,
  onOpenChange,
}: PopoverTriggerProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpenChange(!open);
  };

  return React.cloneElement(children, {
    onClick: handleClick,
  });
}

interface PopoverContentProps {
  children: React.ReactNode;
  className?: string;
  align?: "start" | "center" | "end";
  open: boolean;
}

export function PopoverContent({
  children,
  className,
  align = "start",
  open,
}: PopoverContentProps) {
  if (!open) return null;

  return (
    <div
      className={`popover-content ${className ?? ""}`}
      style={{
        position: "absolute",
        marginTop: "0.5rem",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: 6,
        boxShadow: "0 5px 10px rgba(0,0,0,0.12)",
        zIndex: 100,
        minWidth: "200px",
        left: align === "start" ? 0 : align === "center" ? "50%" : "auto",
        transform: align === "center" ? "translateX(-50%)" : undefined,
        right: align === "end" ? 0 : undefined,
      }}
    >
      {children}
    </div>
  );
}
