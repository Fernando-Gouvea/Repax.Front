import * as React from "react";
import { Toast as BsToast } from "bootstrap";

export interface ToastProps {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "primary" | "success" | "danger" | "warning" | "info";
  autohide?: boolean;
  delay?: number;
}

export function Toast({
  id,
  title,
  description,
  variant = "primary",
  autohide = true,
  delay = 5000,
}: ToastProps) {
  const toastRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!toastRef.current) return;

    const toast = new BsToast(toastRef.current, {
      autohide,
      delay,
    });

    toast.show();

    return () => {
      toast.dispose();
    };
  }, [autohide, delay]);

  return (
    <div
      id={id}
      ref={toastRef}
      className={`toast align-items-center text-bg-${variant} border-0`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">
          {title && <strong className="me-2">{title}</strong>}
          {description}
        </div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
