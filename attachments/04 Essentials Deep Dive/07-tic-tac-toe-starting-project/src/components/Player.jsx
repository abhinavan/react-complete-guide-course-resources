import { useState } from "react";
const Player = ({ playerName, playerSymbol }) => {
  let playerInput = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";
  const [isEditing, setIsEditing] = useState(false);
  const handleClick = () => {
    // recommended way of changing state values instead of directly using ternary operations
    setIsEditing((isEditing) => !isEditing);
    // Not recommended way of changing state value
    // setIsEditing(!isEditing);
  };
  isEditing &&
    (playerInput = <input type="text" placeholder="Player Name"></input>) &&
    (btnCaption = "Save");

  return (
    <li>
      <span className="player">
        {playerInput}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={() => handleClick()}>{btnCaption}</button>
    </li>
  );
};
export default Player;
