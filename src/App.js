import React from "react";
import "./style.css";

class App extends React.Component {
  state = {
    name: "",
    department: "",
    rating: "",
    update: [],
  };
  newData = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  submitData = (event) => {
    event.preventDefault();

    const submitNewData = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
    };

    const newDataUpdated = this.state.update;
    newDataUpdated.push(submitNewData);
    this.setState({ update: newDataUpdated });
  };

  render() {
    return (
      <>
        <div>
          <h1>EMPLOYEE FEEDBACK FORM</h1>
        </div>
        <br />
        <center>
          <form onSubmit={this.submitData}>
            <br />
            <br />
            <label for="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={this.newData}
              value={this.state.name}
              
            />
            <br />
            <br />
            <label for="dept" >
              Department
            </label>
            <input
              type="text"
              name="department"
              id="dept"
              onChange={this.newData}
              value={this.state.department}
              
            />
            <br />
            <br />
            <label for="rating">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              onChange={this.newData}
              value={this.state.rating}
              
            />
            <br />
            <br />
            <button id="submit" type="submit">
              Submit
            </button>
            <br />
            <br />
          </form>
        </center>
        <center>
        <div id="card">
          {this.state.update.map((value, index) => {
            return (
              <p id="card-display">
                Name: {value.name} <br/> Department:{value.department} <br/> Rating:
                {value.rating}
              </p>
            );
          })}
        </div>
        </center>
      </>
    );
  }
}

export default App;
