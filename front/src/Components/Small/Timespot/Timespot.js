import React from 'react'

class Timespot extends React.Component {

  handleClick = () => {
    if(this.props.reserved === false)
    this.props.handleHourChange(this.props.hours, this.props.id);
  }

  render() {
    const active = (this.props.reserved === false ? "dropdown-item" : "dropdown-item disabled")
    return (
        <button 
          className= {active}
          onClick = {this.handleClick}>
          {this.props.hours}
        </button>
    )
  }
}

export default Timespot;