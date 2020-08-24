import React from "react";
import MainView from "./MainView";

class SideBar extends React.Component {
  getData = () => {
    let data = localStorage.getItem("input", true);
    console.log(data);
  };

  render() {
    const { search } = this.props;

    return (
      <div>
        <h6>Search History</h6>
        <a className="history__result" href={search} onChange={this.getData}>
          {this.getData}
        </a>
      </div>
    );
  }
}

export default SideBar;
