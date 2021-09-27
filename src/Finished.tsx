import React from 'react';

interface Props {
  name: string | null;
  handleRestart(): void;
}

function Finished(props: Props) {
  const { name, handleRestart } = props;
  console.log(name);

  return (
    <div>
      <h1> {name != null ? `${name} won the game!` : `It's a tie!`} </h1>

      <button onClick={handleRestart}>Start over</button>
    </div>
  );
}

export default Finished;
