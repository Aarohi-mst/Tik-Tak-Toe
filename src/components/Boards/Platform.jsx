import { useState } from "react";
import Players from "./Players";
import Board from "./Board";
import Log from "../Logs/Log";
import winningCombinations from "../../winning-combinations";
import GameOver from "../GameOver";

const Platform = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const initialBoardGame = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  let gameBoard = [...initialBoardGame.map((array) => [...array])];
  const handleRestart = () => {
    setGameTurns([]);
  };
  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  };
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner;
  const hasDraw = gameTurns.length === 9 && !winner;
  for (const combination of winningCombinations) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  function deriveActivePlayer(turns) {
    if (turns.length === 0) {
      return "X"; // first turn is always X
    }
    return turns[0].player === "X" ? "O" : "X";
  }

  const activePlayer = deriveActivePlayer(gameTurns);

  const selectSquare = (rowIndex, colIndex) => {
    const currentPlayer = deriveActivePlayer(gameTurns);

    const updatedTurns = [
      {
        square: { row: rowIndex, col: colIndex },
        player: currentPlayer,
      },
      ...gameTurns,
    ];

    setGameTurns(updatedTurns);
  };

  return (
    <div>
      <div className="h-130 w-auto bg-black flex flex-col ">
        <div className="flex justify-center items-start p-2">
          <Players
            initialName="Player 1"
            symbol="X"
            onChangeName={handlePlayerNameChange}
            isActive={activePlayer === "X"}
          />
          <Players
            initialName="Player 2"
            symbol="O"
            onChangeName={handlePlayerNameChange}
            isActive={activePlayer === "O"}
          />
        </div>
        {winner || hasDraw ? (
          <GameOver winner={winner} onRestart={handleRestart} />
        ) : (
          <div>
            <div className="text-white flex justify-center items-start p-2">
              <Board
                selectSquare={selectSquare}
                board={gameBoard}
                activePlayer={activePlayer}
                activePlayerSymbol={activePlayer}
              />
            </div>
            <div className="flex flex-col justify-center items-center text-lg font-medium mt-20">
              <Log turns={gameTurns} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Platform;
