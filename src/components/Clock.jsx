import React from "react";
import Button from "./Button";
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
  state = { date: new Date() , local: 'en-US'};

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
  handleClick =  (locale) =>{
    this.setState({
      locale
    })
  }

  render() {
    const {date, locale} = this.state;
    return (
      <div>
        <h1 className="heading">
          {date.toLocaleTimeString(locale)}
        </h1>
        {locale =='bn-BD' ? <Button change={this.handleClick} locale="en-Us" show={true}  /> : <Button change={this.handleClick} locale="bn-BD" show={false} />}
      </div>
    );
  }
}

export default Clock;
