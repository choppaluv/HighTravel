import React from 'react'

class Schedule extends React.Component {
  render() {
  return (
    <div className="schedule">{ this.props.schedule.contents }</div>
  );
  }
}


export default Schedule
