import React, { Component } from "react";
import SearchView from "../components/SearchView";
import ResultList from "../components/ResultList";
import SideBar from "../components/SideBar";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      searchValue: ''
    };
  }

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = searchInput => {
    axios.get(`http://localhost:3000/search/${searchInput}`).then((response) => {
      this.setState({
        search: response.data
      });
      console.log(search)
    });
  }


  // componentDidMount() {

  //   axios.get(`http://localhost:3000/search/teuta`).then((response) => {
  //     this.setState({
  //       result: response.data
  //     });
  //   });
  // }

  render() {
    const { result, search } = this.state;
    console.log(result);
    return (
      <div>
        {result.map(tralala => (
          <ResultList key={tralala._id} tralala={tralala} />
        ))}

        <SideBar />

        <Form>
          <FormGroup>
            <Label for="searchInput">Type anything: </Label>
            <Input type="text" defaultValue={this.state.searchValue} id="userInput" placeholder="Search..." />
          </FormGroup>

          <Button onClick={this.handleSearch}>Search</Button>
        </Form>
      </div>
    );
  }
}
