import React from "react";

class ResultList extends React.Component {
  render() {
    const { list } = this.props;
    console.log(list + " this is from result list");

    return (
      <div>
        <a href={list.FirstURL} target="_blank">
          {list.Text}
        </a>
      </div>
    );
  }
}

export default ResultList;
