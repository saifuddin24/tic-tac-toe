import {useState} from "react";

export default function Game() {

  return (
    <div className="text-red-500 w-screen h-screen flex justify-center items-center bg-gray-800">
      <Board />
    </div>
  )
}

function Board() {
  const [isX, setIsX] = useState(false);
  const [squares, setSquare] = useState(Array(9).fill(null));

  const winner = calculateWinner(squares);

  function handleSquareClick(position) {
    if(squares[position] || calculateWinner(squares)) {
      return;
    }

    const currentBoard = squares.slice();

    if( isX ) {
      currentBoard[position] = "O";
    } else {
      currentBoard[position] = "X";
    }

    setIsX( !isX )
    setSquare( currentBoard );
  }


  return (
    <div className='border p-3 bg-gray-200'>


      {winner && (
        <div>
          <div className='text-red-500'>Game Over</div>
          <div className='text-bold text-xl text-green-600'>The winner is {winner}</div>
        </div>
      )}

      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)}/>
      </div>

      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)}/>
      </div>

      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)}/>
      </div>

    </div>
  )
}


function Square({value, onSquareClick}) {

  return <button
    className="border border-gray-500 size-16 m-1 bg-white hover:bg-green-50 "
    onClick={onSquareClick}
  >
    {value}
  </button>
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}