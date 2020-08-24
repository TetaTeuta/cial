import React from "react";
import MainView from "./MainView";
import "../styles/SideBar.scss";

class SideBar extends React.Component {
  render() {
    const { search } = this.props;
    console.log(search + " this is from history list");

    return (
      <div>
        <h1>Search History</h1>
        <li className="history__result" onClick={this.handleSearch}>
          {search}
        </li>
      </div>
    );
  }
}

export default SideBar;
