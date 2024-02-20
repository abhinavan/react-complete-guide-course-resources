const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns != undefined &&
        turns.map((turn) => {
          return (
            <li key={`${turn.square.row}${turn.square.col}`}>
              {turn.player} selected{" "}
            </li>
          );
        })}
    </ol>
  );
};
export default Log;
