import React, { Component } from "react";
import SearchView from "../components/SearchView";
import ResultsView from "../components/ResultsView";

export default class MainView extends Component {
  render() {
    return (
      <div>
        This is MainView default
        <SearchView />
        <ResultsView />
      </div>
    );
  }
}
