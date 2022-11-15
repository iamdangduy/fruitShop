import Context from "./Context";
import { useState } from "react";

function Provider({ children }) {
  const [count1, setCount1] = useState(0);
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState("");
  const [infor, setInfor] = useState("");

  const handleSubmitCart = () => {
    setCount1(count1 + 1);
  };

  const getItem = (index, inforProduct) => {
    setItem((prevState) => [
      ...prevState,
      { ...inforProduct[index], amount: 1 },
    ]);
    console.log(inforProduct);
  };

  const increaseProduct = (index) => {
    const newList = item.slice();
    newList.splice(index, 1, {
      ...item[index],
      amount: item[index].amount + 1,
    });
    setItem(newList);
  };

  const decreaseProduct = (index) => {
    const newList = item.slice();
    newList.splice(index, 1, {
      ...item[index],
      amount: item[index].amount - 1,
    });
    setItem(newList);
  };

  const valueContext = {
    count1,
    item,
    search,
    infor,
    setInfor,
    setSearch,
    handleSubmitCart,
    getItem,
    increaseProduct,
    decreaseProduct,
  };
  return <Context.Provider value={valueContext}>{children}</Context.Provider>;
}

export default Provider;
