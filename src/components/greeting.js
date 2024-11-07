import React from "react";

const Greeting = (props) => {
  return (
    <div>
      <h2 className="text-center text-4xl">Hi {props.name} !</h2>
    </div>
  );
};

export default Greeting;
