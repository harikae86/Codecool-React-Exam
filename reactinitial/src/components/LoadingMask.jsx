import Spinner from "react-bootstrap/Spinner";
import Stack from "react-bootstrap/Stack";

const LoadingMask = () => {
  return (
    <Stack className="col-md-1 mx-auto mt-8">
      <Spinner animation="border" role="status" variant="danger" size="lg">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Stack>
  );
};

export default LoadingMask;
