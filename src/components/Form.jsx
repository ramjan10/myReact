import React from "react";

class Form extends React.Component {
  state = {
    title: "javascript",
    text: "javascript is favourite",
    librery: "Angular",
    isNice: true,
  };

  handler = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        librery: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isNice: e.target.value,
      });
    } else {
      console.log(e.target.type);
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { title, text, librery, isNice } = this.state;
    console.log(title + text + librery + isNice);
  };

  render() {
    const { title, text, librery, isNice } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="enter title"
            onChange={this.handler}
          />
          <br /> <br />
          <textarea name="text" value={text} onChange={this.handler}></textarea>
          <br /> <br />
          <select name="librery" value={librery} onChange={this.handler}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
          <br /> <br />
          <input
            type="checkbox"
            name="tick"
            value={isNice}
            onChange={this.handler}
          />
          <br /> <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
