import Header from "./components/Header";
import Player from "./components/Player";

function App() {
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players">
            <Player playerName="abhinav" playerSymbol="X"></Player>
            <Player playerName="anand" playerSymbol="0"></Player>
          </ol>
          GAME CONTAINER
        </div>
      </main>
    </>
  );
}

export default App;
