import React, { Component } from "react";
import { Link } from "react-router-dom";
import ValidationError from "../Validation";
import NoteContext from "../NoteContext";
import "./AddFolder.css";

class AddFolder extends Component {
  state = {
    name: "",
  };
  static contextType = NoteContext;

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.name) {
      fetch("http://localhost:9090/folders", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name: this.state.name }),
      })
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          console.log(responseJson);
          this.props.history.push("/");
          this.context.addFolder(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("please enter a name");
    }
  };

  validateFolderName = () => {
    let name = this.state.name.trim();
    if (name.length === 0) {
      return "Name is required";
    }
  };

  render() {
    return (
      <section className="create-folder">
        <h2>Create a folder</h2>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Name</label>
            <input type="text" onChange={this.handleNameChange} required />
            <ValidationError message={this.validateFolderName} />
          </div>
          <div>
            <input className="folder-submit" type="submit" value="Add folder" />
          </div>
          <div className="back-folder-div">
            <Link className="back-folder-link" to="/">
              Back
            </Link>
          </div>
        </form>
      </section>
    );
  }
}

export default AddFolder;
