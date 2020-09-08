import React from "react";
import ResultList from "../components/ResultList";
import SideBar from "../components/SideBar";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../styles//MainView.scss";

class MainView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      search: ""
    };
  }

  /**
   * Takes the users input and stores its value into a state
   * @function handleOnChange
   * @param search
   * @returns {state}
   */

  handleOnChange = (event) => {
    this.setState({ search: event.target.value });
    event.preventDefault();
  };

  /**
   * Once when click event is triggered, users input is taken and stored for API calls
   * @function handleSearch
   * @param  search
   * @returns {state}
   */

  handleSearch = () => {
    this.makeApiCall(this.state.search);
  };

  /**
   * Sends GET request to API and returns results based on query parametar
   * @function makeApiCall
   * @param  searchInput
   * @returns {array} search results
   */

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
        <div className="container__first">
          <Form className="form__container">
            <FormGroup className="form__items">
              <Label className="form__label" for="searchInput">
                Type anything
              </Label>
              <Input
                type="text"
                onChange={(event) => this.handleOnChange(event)}
                defaultValue={this.state.search}
                id="userInput"
                placeholder="Search..."
              />
            </FormGroup>
            <Button className="form__items--button" onClick={this.handleSearch}>
              Search
            </Button>
          </Form>

          {result.map((list) => (
            <ResultList key={list._id} list={list} />
          ))}
        </div>
        <div className="container__second">
          <SideBar search={search} />
        </div>
      </div>
    );
  }
}

export default MainView;
