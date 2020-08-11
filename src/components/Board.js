import "./board.css";
import React from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [isDragonNext, setisDragonNext] = React.useState(true);

  const nextPlayer = isDragonNext ? "🐱‍🐉" : "🐢";

  const status = `Next player:${nextPlayer}`;

  function handleClick(i) {
    const squaresCopy = [...squares];
    squaresCopy[i] = nextPlayer;
    setSquares(squaresCopy);
    setisDragonNext(!isDragonNext);
    /* console.log(squaresCopy); */
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
