import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Laptop from "./components/Laptop";
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
  const [sortedLaptops, setSortedLaptops] = useState([]);

  useEffect(() => {
    fetchFromApi().then((data) => {
      setLaptops(data);
      setLoading(false);
    });
  }, [sortedLaptops]);

  return (
    <div>
      <Header laptops={laptops} setSortedLaptops={setSortedLaptops} />
      <h1>Laptops</h1>
      {loading && <LoadingMask />}
      {sortedLaptops.length > 0
        ? sortedLaptops.map((laptop, i) => {
            return <Laptop laptop={laptop} key={i} />;
          })
        : laptops.map((laptop, i) => {
            return <Laptop laptop={laptop} key={i} />;
          })}
    </div>
  );
};

export default App;
