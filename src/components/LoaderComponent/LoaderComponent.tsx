import Spinner from "react-bootstrap/Spinner";
const LoaderComponent = () => {
  return (
    <div className="text-center">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default LoaderComponent;
