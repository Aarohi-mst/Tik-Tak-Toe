import { useState } from "react";

const Players = ({ initialName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  const handleClick = () => {
    setIsEditing((editing) => !editing); //best practice
    // setIsEditing(!isEditing);---------doesn't update state instantly
    // setIsEditing(isEditing ? false : true);---------------not preferred
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };
  return (
    <div className="text-white flex justify-between items-center p-6 text-lg font-medium rounded-2xl shadow-lg">
      <div
        className={`flex items-center gap-6 px-4 py-2 rounded-xl ${
          isActive
            ? "border border-amber-400 bg-amber-400/10 shadow-md"
            : "hover:border hover:border-gray-600 hover:bg-gray-800"
        }`}
      >
        <div className="flex items-center gap-8 px-2 py-1">
          {isEditing ? (
            <div>
              <input
                type="text"
                defaultValue={playerName}
                required
                className="border bg-gray-700"
                onChange={(e) => setPlayerName(e.target.value)} // two-way binding
              />
              <span>{symbol}</span>
            </div>
          ) : (
            <div className="flex gap-8">
              <span>{playerName}</span>
              <span>{symbol}</span>
            </div>
          )}
        </div>
        <button
          className=" p-1 space-x-2 text-sm text-amber-500"
          onClick={handleClick}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default Players;
