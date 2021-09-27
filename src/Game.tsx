import React from 'react';
import Square from './Square';

interface Props {
  board: string[];
  handleClick(index: number): void;
  players: string[];
}

function Game(props: Props) {
  const { board, handleClick, players } = props;

  const styles = {
    board: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      width: '300px',
      margin: '20px auto',
    },
  };

  return (
    <>
      <header>
        <h1>
          {players[0]}(X) VS {players[1]}(O)
        </h1>
      </header>
      <div style={styles.board}>
        {board.map((value, index) => {
          return (
            <Square
              key={index}
              value={value}
              index={index}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </>
  );
}

export default Game;
