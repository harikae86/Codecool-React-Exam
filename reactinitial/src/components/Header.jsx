import { useEffect, useState } from "react";

const Header = (props) => {
  const {
    laptops,
    setLaptops,
    setSortedLaptops,
    sortedLaptops,
    setSearch,
    search,
  } = props;

  const clickHandler = () => {
    const sortedAsc = laptops.sort((a, b) => {
      return a.weigth - b.weigth;
    });
    setSortedLaptops(sortedAsc);
    if (sortedAsc) {
      const sortedDesc = sortedAsc.sort((a, b) => {
        return b.weigth - a.weigth;
      });
      setSortedLaptops(sortedDesc);
      console.log(sortedDesc);
    }
  };

  useEffect(() => {
    if (search !== "") {
      const filteredList = laptops.filter((item) => {
        return item.name.toLowerCase().includes(search);
      });
      setSortedLaptops(filteredList);
    }
  }, [search]);

  return (
    <>
      <button onClick={clickHandler}>Sort</button>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default Header;
