import { useReducer, useRef, useState } from "react";

export default function Player() {
  const playername = useRef();
  const [name, setname] = useState("");

  function hadleClick() {
    setname(playername.current.value);
    playername.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {name ? name : "unknown entity"}</h2>
      <p>
        <input type="text" ref={playername} />
        <button onClick={hadleClick}>Set Name</button>
      </p>
    </section>
  );
}
