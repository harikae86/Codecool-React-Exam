import { useState } from "react";
import Button from "react-bootstrap/Button";

const Laptop = (props) => {
  const { laptop } = props;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="mb-4">
      <h3>{laptop.name}</h3>
      {showDetails && (
        <>
          <p>{laptop.brand}</p>
          <p>{laptop.weigth} kg</p>
        </>
      )}
      <Button
        variant="info"
        className="mt-2"
        onClick={() =>
          showDetails ? setShowDetails(false) : setShowDetails(true)
        }
      >
        {showDetails ? "Show Less" : "Show More"}
      </Button>
    </div>
  );
};

export default Laptop;
