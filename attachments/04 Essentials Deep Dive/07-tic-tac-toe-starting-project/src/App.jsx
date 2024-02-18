import Header from "./components/Header";
import Player from "./components/Player";

function App() {
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players">
            <Player playerInitialName="abhinav" playerSymbol="X"></Player>
            <Player playerInitialName="anand" playerSymbol="0"></Player>
          </ol>
          GAME CONTAINER
        </div>
      </main>
    </>
  );
}

export default App;
