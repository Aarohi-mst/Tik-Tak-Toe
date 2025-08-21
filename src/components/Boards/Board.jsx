const Board = ({ selectSquare, activePlayerSymbol, board }) => {
  //-------------------------For alternate toggle--------------------
  //   const [gameBoard, setGameBoard] = useState(initialBoardGame);
  //   const handleSelectedSquare = (rowIndex, colIndex) => {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedGameBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedGameBoard;
  //     });
  //     selectSquare();
  //   };
  return (
    <div className="text-white h-80 w-4/5">
      <div className="grid grid-rows-3 h-full w-full">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-3">
            {row.map((playerSymbol, colIndex) => (
              <button
                key={colIndex}
                className="h-20 w-20 bg-gray-400 flex items-center justify-center m-1 ml-4 mt-3 rounded text-black font-bold text-5xl"
                onClick={() => selectSquare(rowIndex, colIndex)}
                disabled={playerSymbol !== null}
              >
                {playerSymbol}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
