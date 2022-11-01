import React from "react";
// import classes from "./"
const MyButton = (props) => {
  return (
    <div>
      <button {...props}>{props.children}</button>
    </div>
  );
};

export default MyButton;
