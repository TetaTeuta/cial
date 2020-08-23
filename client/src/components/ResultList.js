import React from 'react';
import MainView from "../components/MainView";


class ResultList extends React.Component {

  render() {
    const { tralala } = this.props;
    console.log(tralala + ' this is from result list');

    return (
      <div>
        <p>{tralala.FirstURL} first p tag</p>
        <p>{tralala.Text} second p tag</p>
      </div>
    )
  }
}

export default ResultList;