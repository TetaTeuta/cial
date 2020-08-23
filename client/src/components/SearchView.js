// import React, { useState } from "react";
// import axios from "axios";

// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


// class SearchView extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       searchValue: ''
//     };
//   }

//   handleOnChange = event => {
//     this.setState({ searchValue: event.target.value });
//   };

//   handleSearch = () => {
//     this.makeApiCall(this.state.searchValue);
//   };

//   makeApiCall = searchInput => {
//     axios.get(`http://localhost:3000/search/${searchInput}`).then((response) => {
//       this.setState({
//         search: response.data
//       });
//     });
//   }



//   componentDidMount() {

//     axios.get(`http://localhost:3000/search/teuta`).then((response) => {
//       this.setState({
//         search: response.data
//       });
//     });
//   }

//   render() {

//     const { search } = this.state;

//     return (
//       <Form>
//         <FormGroup>
//           <Label for="searchInput">Type anything: </Label>
//           <Input type="text" defaultValue={this.state.searchValue} id="userInput" placeholder="Search..." />
//         </FormGroup>

//         <Button onClick={this.handleSearch}>Search</Button>
//       </Form>
//     )
//   }
// }

// export default SearchView;

