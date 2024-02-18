import { useState } from "react";
const Player = ({ playerInitialName, playerSymbol }) => {
  let btnCaption = "Edit";
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(playerInitialName);
  let playerInput = <span className="player-name">{playerName}</span>;
  const handleClick = () => {
    // recommended way of changing state values instead of directly using ternary operations
    setIsEditing((isEditing) => !isEditing);
    // Not recommended way of changing state value
    // setIsEditing(!isEditing);
  };
  const handleChange = (event) => setPlayerName(event.target.value);
  isEditing &&
    (playerInput = (
      <input type="text" onChange={handleChange} value={playerName}></input>
    )) &&
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
