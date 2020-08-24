import React, { Component } from "react";
import ResultList from "../components/ResultList";
import SideBar from "../components/SideBar";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import "../styles//MainView.scss";

class MainView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      search: ""
    };
  }

  handleOnChange = (event) => {
    this.setState({ search: event.target.value });
    event.preventDefault();
  };

  handleSearch = () => {
    this.makeApiCall(this.state.search);
  };

  makeApiCall = (searchInput) => {
    const urlString = `http://localhost:3000/search/${searchInput}`;
    axios
      .get(urlString)
      .then((response) => {
        this.setState({
          result: response.data
        });
      })
      .then(() => {
        localStorage.setItem("input", searchInput);
      });
  };

  render() {
    const { result, search } = this.state;

    console.log(search);
    return (
      <div className="container__main">
        <Form className="form__container">
          <FormGroup className="form__items">
            <Label for="searchInput">Type anything: </Label>
            <Input
              type="text"
              onChange={(event) => this.handleOnChange(event)}
              defaultValue={this.state.search}
              id="userInput"
              placeholder="Search..."
            />
          </FormGroup>
          <Button className="form__items" onClick={this.handleSearch}>
            Search
          </Button>
          {result.map((list) => (
            <ResultList key={list._id} list={list} />
          ))}
        </Form>

        <SideBar search={this.getData} />
      </div>
    );
  }
}

export default MainView;
