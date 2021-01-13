import './App.css';
import React, {Component} from 'react'

import Cell from './components/Cell/Cell'

class App extends Component {

  state = {
    board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    turn: 1,
    won: false
  }

  clickHandler = (index) => {
    let newBoard = [...this.state.board]
    newBoard[index] = this.state.turn
    this.setState({
      board: newBoard,
      turn: this.state.turn === 1 ? 2 : 1
    })
    console.log(this.state.board)
    this.hasWon(newBoard)
  }

  hasWon = (board) => {
    if(board[0] === board[1] &&  board[0] === board[2] && board[0] !== 0){
      this.updateState(board[0])
    }
  }

  updateState = (value) => {
    this.setState({
      won: true,
      board: [value, value, value, value, value, value, value, value, value]
    })
  }

  render(){
    let cells = null
    cells = this.state.board.map((el, index) => {
      let classes = "Cell" + (index + 1)
      if(el !== 0) classes += " Person" + el 
      return <Cell cellName={classes}
                   clicked={() => this.clickHandler(index)}
                   key={index}/>
    })
    return (
      <div className="App">
        <h1>Tic Tac Toe Game</h1>
        <div className="Board">
          {cells}
        </div>
      </div>
    );
  }
}

export default App;
