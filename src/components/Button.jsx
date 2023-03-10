import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Button = ({
  bgColor,
  color,
  size,
  text,
  borderRadius,
  icon,
}) => {
  const {  setIsClicked } = useStateContext();
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={() => setIsClicked((isClicked) => isClicked.cart = false)}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
