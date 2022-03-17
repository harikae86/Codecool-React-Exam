import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Header = (props) => {
  const { laptops, setSortedLaptops, setSearch, search } = props;

  const [isSorted, setIsSorted] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    if (isSorted) {
      const sortedDesc = laptops.sort((a, b) => {
        return b.weigth - a.weigth;
      });
      setSortedLaptops(sortedDesc);
      setIsSorted(false);
    }

    if (!isSorted) {
      const sortedAsc = laptops.sort((a, b) => {
        setIsSorted(true);
        return a.weigth - b.weigth;
      });
      setSortedLaptops(sortedAsc);
    }
  };

  useEffect(() => {
    const filteredList = laptops.filter((item) => {
      return item.name.toLowerCase().includes(search);
    });
    setSortedLaptops(filteredList);
  }, [search]);

  return (
    <Form className="mb-3">
      <Form.Group className="mb-3 d-grid gap-2">
        <Button size="lg" variant="warning" onClick={clickHandler}>
          Sort
        </Button>
      </Form.Group>
      <Form.Group className="mb-3" xs={6}>
        <Form.Control
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default Header;
