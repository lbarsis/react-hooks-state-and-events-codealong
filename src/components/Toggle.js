import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false)

  function handleToggle() {
    setToggle(toggle => !toggle)
  }

  return <button onClick={handleToggle}>{toggle ? "ON" : "OFF"}</button>;
}

export default Toggle;
