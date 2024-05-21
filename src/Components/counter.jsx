import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1","tag2"],
  };

  renderCondition() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags</p>;
    }else
    return <ul>{this.state.tags.map((tag) => (<li key={tag}>{tag}</li>))} </ul>;
  }

  constructor () {
    super ();
    // console.log('Constructor', this)
    this.ButtonClick = this.ButtonClick.bind(this.state)
  }

  ButtonClick (){
    console.log("Testing", this)
//    return this.push("Hello World")

  }

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-4"> {this.formatCount()} </span>
        <button onClick={this.ButtonClick} className="btn btn-secondary btn-sm">Increment</button>
        <div> 
            {this.state.tags.length === 0 && <h1>Please create tags </h1>}
            {this.state.tags.length !== 0 && <p> These are the list of things to buy</p>}
            {this.renderCondition()} 
        </div>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
