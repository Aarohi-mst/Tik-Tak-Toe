const GameOver = ({ winner, onRestart }) => {
  return (
    <div className="h-130 w-auto bg-black flex flex-col gap-7 justify-center items-center z-20">
      <h2 className="text-yellow-400 text-6xl font-bold top-0">Game Over!</h2>
      {winner && <p className="text-white text-4xl">{winner} won!</p>}
      {!winner && <p className="text-white text-4xl">Match Draw!</p>}
      <p>
        <button
          className="text-yellow-400 text-2xl p-2 font-medium rounded-sm shadow-sm border border-amber-400 hover:text-black hover:bg-yellow-400"
          onClick={onRestart}
        >
          Rematch
        </button>
      </p>
    </div>
  );
};

export default GameOver;
