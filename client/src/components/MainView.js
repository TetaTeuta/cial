import React, { Component } from "react";
import ResultList from "../components/ResultList";
import SideBar from "../components/SideBar";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      search: ''
    };
  }

  handleOnChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.search);
  };

  makeApiCall = searchInput => {

    const urlString = `http://localhost:3000/search/${searchInput}`

    axios.get(urlString).then((response) => {
      console.log(urlString);
      this.setState({
        result: response.data
      });
    });
  }

  render() {
    const { result } = this.state;
    return (
      <div>

        <Form>
          <FormGroup>
            <Label for="searchInput">Type anything: </Label>
            <Input type="text" onChange={event => this.handleOnChange(event)} defaultValue={this.state.search} id="userInput" placeholder="Search..." />
          </FormGroup>
          <Button onClick={this.handleSearch}>Search</Button>
        </Form>

        {result.map(tralala => (
          <ResultList key={tralala._id} tralala={tralala} />
        ))}

      </div>
    );
  }
}
