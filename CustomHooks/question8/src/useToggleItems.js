import { useState } from "react";

const useToggleItems = (initialValue = [], initialPosition = 0) => {
 
  const safePosition =
    initialPosition >= 0 && initialPosition < initialValue.length
      ? initialPosition
      : 0;

  const [index, setIndex] = useState(safePosition);

  
  const toggle = () => {
    setIndex((prevIndex) => (prevIndex + 1) % initialValue.length);
  };

  return [initialValue[index], toggle];
};

export default useToggleItems;
