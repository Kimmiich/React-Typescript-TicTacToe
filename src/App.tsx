import './App.css';
import Start from './Start';
import Game from './Game';
import Finished from './Finished';
import useTicTacToe from './useTicTacToe';

function App() {
  const game = useTicTacToe();

  return (
    <div className="App">
      {game.gameStatus === 'started' && (
        <Game
          board={game.board}
          handleClick={game.handleClick}
          players={game.players}
        />
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
