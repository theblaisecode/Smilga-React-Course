import { useState } from "react";

function useToggle(defaultValue) {
  const [isToggle, setIsToggle] = useState(defaultValue);

  const toggle = () => {
    setIsToggle((prevIsToggle) => !prevIsToggle);
  };

  return { isToggle, toggle };
}

export default useToggle;
