import React, { useState, useEffect } from "react";
import "./Alert.css";

interface AlertProps {
  message: string;
  type: "success" | "danger";
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    show && (
      <div
        className={`alert alert-${type} alert-dismissible fade show`}
        role="alert"
      >
        {message}
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => setShow(false)}
        ></button>
      </div>
    )
  );
};

export default Alert;
