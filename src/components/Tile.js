import React from 'react';
import style from './Board.css';

class Tile extends React.Component {

  render() {
    const num = this.props.value;
    return (
      <div>
        <input
            type='number'
            id={this.props.id}
            min='1'
            max='9'
            value={num === '.' ? '' : num}
            onChange={this.props.action}
            className={num === '.' ? style.Enabled : style.Disabled}
            autoComplete='off'
        />
      </div>
    )
  }
}

export default Tile;