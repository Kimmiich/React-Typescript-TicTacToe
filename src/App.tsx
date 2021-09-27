import './App.css';
import Start from './Start';
import Game from './Game';
import Finished from './Finished';
import useTicTacToe from './useTicTacToe';

function App() {
  const game = useTicTacToe();

  return (
    <div className="App">
      <h1>TicTacToe</h1>
      {game.gameStatus === 'started' && (
        <Game board={game.board} handleClick={game.handleClick} />
      )}
      {game.gameStatus === 'created' && (
        <Start handleStart={game.handleStart} />
      )}
      {game.gameStatus === 'finished' && (
        <Finished handleRestart={game.handleRestart} name={game.winner} />
      )}
    </div>
  );
}

export default App;
