import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Laptop from "./components/Laptop";
import LoadingMask from "./components/LoadingMask";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

import "bootstrap/dist/css/bootstrap.min.css";

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
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchFromApi().then((data) => {
      setLaptops(data);
      setLoading(false);
    });
  }, [sortedLaptops]);

  return (
    <Stack gap={4} className="col-md-8 mx-auto">
      <div className="p-4">
        <Header
          laptops={laptops}
          setLaptops={setLaptops}
          sortedLaptops={sortedLaptops}
          setSortedLaptops={setSortedLaptops}
          setSearch={setSearch}
          search={search}
        />
        <h1 className="col-md-2 mx-auto mb-3">Laptops</h1>

        {loading && <LoadingMask />}
        <Container className="mx-auto text-center mt-4">
          <Row>
            {sortedLaptops.length > 0
              ? sortedLaptops.map((laptop, i) => {
                  return (
                    <Col>
                      <Laptop laptop={laptop} key={i} />
                    </Col>
                  );
                })
              : laptops.map((laptop, i) => {
                  return (
                    <Col>
                      <Laptop laptop={laptop} key={i} />
                    </Col>
                  );
                })}
          </Row>
        </Container>
      </div>
    </Stack>
  );
};

export default App;
