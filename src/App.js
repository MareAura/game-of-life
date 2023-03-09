import './App.css';
import Tile from "./Tile";
import {useState} from "react";
import icon from './icon.PNG'

function App() {

    const [boardSt, setBoardSt] = useState(createBoard(30, 50))

    function createBoard(width, height) {
      let board = [];

        for (let y = 0; y < width; y++) {
        let row = []
            for (let x = 0; x < height; x++) {
          row.push(false)
        }
        board.push(row)
      }
      return board
    }

    function flipTile(y, x) {

        const newBoard = []
        for (let row of boardSt) {
            newBoard.push([...row])
        }
        newBoard[y][x] = !boardSt[y][x]

        setBoardSt(newBoard)
    }

    function flipAllTiles() {
        const newBoard = getNextBoard(boardSt)
        setBoardSt(newBoard)
    }

    function getNextBoard(currentBoard) {
        const newBoard = []

        for (let y = 0; y < currentBoard.length; y++) {
            let row = []
            for (let x = 0; x < currentBoard[0].length; x++) {

                let count = 0

                if (y - 1 > 0 && currentBoard[y-1][x]) count++
                if (y - 1 > 0 && currentBoard[y-1][x+1]) count++
                if (x+1 < 50 && currentBoard[y][x+1]) count++
                if (x+1< 50 && y+1< 30 && currentBoard[y+1][x+1]) count++
                if (y+1 <30 && currentBoard[y+1][x]) count++
                if (y+1 <30 && x-1 >0 && currentBoard[y+1][x-1]) count++
                if (x-1 > 0 && currentBoard[y][x-1]) count++
                if (y - 1 > 0 && x-1 >0 && currentBoard[y-1][x-1]) count++

                if ((currentBoard[y][x] && count <= 1)
                    || (currentBoard[y][x] && count >= 4)
                    || (!currentBoard[y][x] && count === 3)) {
                    row[x] = !currentBoard[y][x]
                } else {
                    row[x] = currentBoard[y][x]
                }
            }
            newBoard.push(row)
        }

        return newBoard
    }

    
    const [intervalId, setIntervalId] = useState(null)

    function start() {
        const nIntervId = setInterval(() => {
            setBoardSt(currentBoard => getNextBoard(currentBoard))
        }, 1010 - speed)
        setIntervalId(nIntervId)
    }

    function stop() {
        clearInterval(intervalId);
        setIntervalId(null)
    }

    function clearBoard() {
        setBoardSt((board) => createBoard(board.length, board[0].length))
        stop()
    }

    const [speed, setSpeed] = useState(500)

    function changeSpeed(e) {
        setSpeed(e.target.value)
        if(intervalId !== null) {
            stop()
            start()
        }
    }


    let tblBoard = []

    for (let y = 0; y < boardSt.length; y++) {
        let row = []
        for (let x = 0; x < boardSt[0].length; x++) {
            let coord = `${y}-${x}`
            row.push(<Tile
                key={coord}
                isLit={boardSt[y][x]}
                flipTile={() => flipTile(y, x)}
            />)
        }
        tblBoard.push(<tr key={y}>{row}</tr>)
    }


    return (
        <div>
            <div className="Header">
                <img src={icon} alt='icon' className='logo'/>
                <span className='leftMargin'>Game of Life</span>
            </div>

            <div className="table-wrapper">
                <table className="Board">
                    <tbody>{tblBoard}</tbody>
                </table>
            </div>


            <div className='Buttons'>
                <button onClick={flipAllTiles}><i className="fa-solid fa-arrow-right-long"></i> <span className='leftMargin'>NEXT</span></button>
                {!intervalId
                    ? <button onClick={start}><i className="fa-solid fa-play"></i> <span className='leftMargin'>START</span></button>
                    : <button onClick={stop}><i className="fa-solid fa-stop"></i><span className='leftMargin'> STOP</span></button>}
                <button onClick={clearBoard}><i className="fa-solid fa-x"></i> <span className='leftMargin'>CLEAR</span></button>
            </div>

            <div className='Speed'>
                <label className="label" htmlFor="speed"><i className="fa-solid fa-gauge-high"></i></label>
                <input type="range"
                       id="speed"
                       name="speed"
                       min="0"
                       max="1000"
                       value={speed}
                       step="100"
                       onChange={changeSpeed}
                />
            </div>

        </div>
    );
}

export default App;