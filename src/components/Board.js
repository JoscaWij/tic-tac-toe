import "./board.css";
import React from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = React.useState([
    "O",
    null,
    "X",
    "X",
    "X",
    "O",
    "O",
    null,
    null,
  ]);
  const status = "Next player: X";

  function handleClick() {
    alert("click");
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        <Square
          value={squares[0]}
          onClick={function () {
            setSquares(handleClick);
          }}
        />
        <Square
          value={squares[1]}
          onClick={function () {
            setSquares(handleClick);
          }}
        />
        <Square
          value={squares[2]}
          onClick={function () {
            setSquares(handleClick);
          }}
        />
        <Square
          value={squares[3]}
          onClick={function () {
            setSquares(handleClick);
          }}
        />
        <Square
          value={squares[4]}
          onClick={function () {
            setSquares(handleClick);
          }}
        />
        <Square
          value={squares[5]}
          onClick={function () {
            setSquares(handleClick);
          }}
        />
        <Square
          value={squares[6]}
          onClick={function () {
            setSquares(handleClick);
          }}
        />
        <Square
          value={squares[7]}
          onClick={function () {
            setSquares(handleClick);
          }}
        />
        <Square
          value={squares[8]}
          onClick={function () {
            setSquares(handleClick);
          }}
        />
      </div>
    </div>
  );
}
