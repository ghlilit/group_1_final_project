import React from 'react'

class Timespot extends React.Component {
    handleClick = () => {
        if(this.props.reserved === false)
        this.props.pickTime(this.props.hours, this.props.id);
    }

  render() {
    const active = (this.props.reserved === false ? "dropdown-item" : "dropdown-item disabled")
    return (
      <div>
        <button className= {active}
         onClick = {this.handleClick}>{this.props.hours}</button>
      </div>
    )
  }
}

export default Timespot;