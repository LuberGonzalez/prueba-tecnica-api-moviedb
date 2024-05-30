import React from "react";

interface ErrorProps {
  errorMessage: string;
}

const ErrorComponent: React.FC<ErrorProps> = ({ errorMessage }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {errorMessage}
    </div>
  );
};

export default ErrorComponent;
