import React from "react";

class ResultList extends React.Component {
  render() {
    const { list } = this.props;

    return (
      <div className="container__results">
        <a href={list.FirstURL} target="_blank" rel="noopener noreferrer">
          {list.Text}
        </a>
      </div>
    );
  }
}

export default ResultList;
