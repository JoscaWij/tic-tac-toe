import "./board.css";
import React from "react";
import Square from "./Square";

export default function Board() {
  let [squares, setSquares] = React.useState([
    "🐱‍🐉",
    null,
    "🐢",
    "🐢",
    "🐢",
    "🐱‍🐉",
    "🐱‍🐉",
    null,
    null,
  ]);

  const status = "Next player: 🐱‍🐉";

  function handleClick(i) {
    /*     const squares = squares.slice();
    squares[i] = "✌";
    setSquares({ squares: squares }); */
    const squaresCopy = squares.slice();
    squaresCopy[i] = "✌";
    setSquares(squaresCopy);
    console.log(squaresCopy);
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        <Square
          value={squares[0]}
          onClick={function () {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onClick={function () {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onClick={function () {
            handleClick(2);
          }}
        />
        <Square
          value={squares[3]}
          onClick={function () {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onClick={function () {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onClick={function () {
            handleClick(5);
          }}
        />
        <Square
          value={squares[6]}
          onClick={function () {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onClick={function () {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onClick={function () {
            handleClick(8);
          }}
        />
      </div>
    </div>
  );
}
