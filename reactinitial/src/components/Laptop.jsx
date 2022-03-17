import { useState } from "react";

const Laptop = (props) => {
  const { laptop } = props;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <h3>{laptop.name}</h3>
      {showDetails && (
        <>
          <p>{laptop.brand}</p>
          <p>{laptop.weigth} kg</p>
        </>
      )}
      <button
        onClick={() =>
          showDetails ? setShowDetails(false) : setShowDetails(true)
        }
      >
        {showDetails ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Laptop;
