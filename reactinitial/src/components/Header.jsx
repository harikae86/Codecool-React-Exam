import { useState } from "react";

const Header = (props) => {
  const { laptops, setSortedLaptops } = props;

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

  return <button onClick={clickHandler}>Sort</button>;
};

export default Header;
