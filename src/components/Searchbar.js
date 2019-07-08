import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    inputContent: ""
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label> Image Search : </label>
            <input
              type="text"
              placeholder="Search for an image..."
              value={this.state.inputContent}
              onChange={e => this.setState({ inputContent: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
