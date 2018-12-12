import React from 'react'

class Timespot extends React.Component {
    handleClick = () => {
        this.props.pickTime(this.props.hours, this.props.id);
    }

  render() {
    return (
      <div>
        <button className="dropdown-item"
         onClick = {this.handleClick}>{this.props.hours}</button>
      </div>
    )
  }
}

export default Timespot;