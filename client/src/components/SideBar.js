import React from "react";

class SideBar extends React.Component {
  render() {
    const { search } = this.props;
    console.log(search + " from sidebar");
    return (
      <div className="history__result">
        <h6>Search History</h6>
        <a href={search}>{search}</a>
      </div>
    );
  }
}

export default SideBar;
