import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Sqaure({ value, handleCLick }) {
  return (
    <button className="square" onClick={handleCLick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);

  function handleCLick(i) {
    if (squares[i] || calcualteWinner(squares)) {
      return;
    }

    // if (squares[i] === null) {
    // }
    const newSquares = [...squares];
    if (isNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    setSquares(newSquares);
    setIsNext(!isNext);
  }
  // console.log("squares", squares);
  let winner = calcualteWinner(squares);
  // let status;
  // if (winner) {
  //   status = `Winner is ${winner}`;
  // } else {
  //   status = `Next player is ${isNext ? "X" : "O"}`;
  // }

  return (
    <>
      {winner === null ? (
        <h3>Next Player is {isNext ? "X" : "O"} </h3>
      ) : (
        <h2>Winner is {winner}</h2>
      )}

      {/* <h2>{status}</h2> */}
      <div className="square-wrapper">
        <Sqaure value={squares[0]} handleCLick={() => handleCLick(0)} />
        <Sqaure value={squares[1]} handleCLick={() => handleCLick(1)} />
        <Sqaure value={squares[2]} handleCLick={() => handleCLick(2)} />
        <Sqaure value={squares[3]} handleCLick={() => handleCLick(3)} />
        <Sqaure value={squares[4]} handleCLick={() => handleCLick(4)} />
        <Sqaure value={squares[5]} handleCLick={() => handleCLick(5)} />
        <Sqaure value={squares[6]} handleCLick={() => handleCLick(6)} />
        <Sqaure value={squares[7]} handleCLick={() => handleCLick(7)} />
        <Sqaure value={squares[8]} handleCLick={() => handleCLick(8)} />
      </div>
    </>
  );
}

function calcualteWinner(squares) {
  // const squares= ["X",null,null,"O","O","O",null,null,"O"]
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function App() {
  return (
    <>
      <Board />
    </>
  );
}
