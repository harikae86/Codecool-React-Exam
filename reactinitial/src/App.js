import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";

const fetchFromApi = () => {
  const response = fetch("https://demoapi.com/api/laptop").then((res) =>
    res.json()
  );
  return response;
};

const App = () => {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFromApi().then((data) => {
      setLaptops(data);
      setLoading(false);
    });
  }, []);
  console.log(laptops);

  return (
    <div>
      <h1>Laptops</h1>
      {loading && <LoadingMask />}
    </div>
  );
};

export default App;
