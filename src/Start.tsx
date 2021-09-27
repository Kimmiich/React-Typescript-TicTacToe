import React, { useState } from 'react';

interface Props {
  handleStart(players: string[]): void;
}

function Start(props: Props) {
  const { handleStart } = props;

  const [players, setPlayers] = useState(['', '']);

  const handleInput = (evt: any, index: number) => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1, evt.target.value);
    setPlayers(newPlayers);
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    handleStart(players);
  };

  return (
    <div>
      <h1>Welcome to the Tic tac toe game!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Spelare ett..."
          value={players[0]}
          onInput={(e) => handleInput(e, 0)}
        />
        <br />
        <input
          type="text"
          placeholder="Spelare två..."
          value={players[1]}
          onInput={(e) => handleInput(e, 1)}
        />
        <br />
        <button>Start game</button>
      </form>
    </div>
  );
}

export default Start;
