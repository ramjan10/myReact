import React from "react";

/* componet 2 types
 * one for function and other is class component
 * function component is import and class compnent not use now
 * class component pass data throw props and use this by using 'this.props....'
 */

// function Clock({ local }) {
//   return (
//     <h1 className="heading">Hellow {new Date().toLocaleTimeString(local)}</h1>
//   );
// }

class Clock extends React.Component {
  state = { date: new Date() };

  componentDidMount() {
    setInterval(() => {
      this.clockTimer = this.tick();
    }, 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  render() {
    return (
      <h1 className="heading">
        {this.state.date.toLocaleTimeString(this.props.local)}
      </h1>
    );
  }
}

export default Clock;
