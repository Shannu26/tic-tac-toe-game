import './App.css';
import React, {Component} from 'react'

import Cell from './components/Cell/Cell'

class App extends Component {

  state = {
    board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    turn: 1,
    won: false,
  }

  resetGame = () => {
    this.setState({
      board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      turn: 1,
      won: false,
    })
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
    this.hasTied(newBoard)
  }

  hasTied = (board) => {
    for(let i = 0;i < board.length;i++){
      if(board[i] === 0) return
    }
    if(!this.state.won) this.setState({won: true})
  }

  hasWon = (board) => {
    if(board[0] === board[1] &&  board[0] === board[2] && board[0] !== 0){
      this.updateState(board[0])
    }
    if(board[3] === board[4] &&  board[3] === board[5] && board[3] !== 0){
      this.updateState(board[3])
    }
    if(board[6] === board[7] &&  board[6] === board[8] && board[6] !== 0){
      this.updateState(board[6])
    }
    if(board[0] === board[3] &&  board[0] === board[6] && board[0] !== 0){
      this.updateState(board[0])
    }
    if(board[1] === board[4] &&  board[1] === board[7] && board[1] !== 0){
      this.updateState(board[1])
    }
    if(board[2] === board[5] &&  board[2] === board[8] && board[2] !== 0){
      this.updateState(board[2])
    }
    if(board[0] === board[4] &&  board[0] === board[8] && board[0] !== 0){
      this.updateState(board[0])
    }
    if(board[2] === board[4] &&  board[2] === board[6] && board[2] !== 0){
      this.updateState(board[2])
    }
  }

  updateState = (value) => {
    this.setState({
      won: true,
      board: [value, value, value, value, value, value, value, value, value],
      turn: value
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
        {this.state.won ? <h1 onClick={this.resetGame} id="replay">Replay</h1> : null}
      </div>
    );
  }
}

export default App;
