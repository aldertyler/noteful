import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NoteContext from "../NoteContext";
import Moment from "react-moment";
import "./Note.css";

class Note extends Component {
  static contextType = NoteContext;

  handleDeleteNote = () => {
    this.context.deleteNote(this.props.id);
  };
  render() {
    let { name, id, modified } = this.props;
    console.log(name);
    console.log(id);
    console.log(modified);
    return (
      <div className="note">
        <h1 className="title">
          <Link to={`/note/${id}`}>{name}</Link>
        </h1>
        <p className="date">
          Modified: <Moment>{modified}</Moment>
        </p>
        <button className="note-delete" onClick={this.handleDeleteNote}>
          Delete
        </button>
      </div>
    );
  }
}

Note.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Note;
