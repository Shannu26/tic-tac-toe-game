import React, {Component} from 'react'
import './Cell.css'

class Cell extends Component{
    render(){
        return (
            <div className={this.props.cellName}
                 onClick={this.props.clicked}></div>
        )
    }
}

export default Cell