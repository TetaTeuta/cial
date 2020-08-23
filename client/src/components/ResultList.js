import React from 'react';

class ResultList extends React.Component {

  render() {
    const { tralala } = this.props;
    console.log(tralala + ' this is from result list');

    return (
      <div>
        <a href={tralala.FirstURL} > {tralala.Text}</a>
      </div>

    )
  }
}

export default ResultList;