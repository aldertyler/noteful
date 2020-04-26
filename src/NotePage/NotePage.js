import React from "react";
import { Component, createContext } from "react";
import NoteContext from "../NoteContext";
import { Link } from "react-router-dom";
import "./NotePage.css";

class NoteDetail extends Component {
  static contextType = NoteContext;
  render() {
    console.log(this.context);
    let note = this.context.notes.filter((note) => {
      return note.id == this.props.match.params.noteId;
    });

    return (
      <div>
        <div className="Note">
          <div className="note-title">{note[0].name}</div>
          <div className="note-date">{note[0].modified}</div>
          <div className="note-content">{note[0].content}</div>
        </div>
        <div className="goback">
          <Link className="link" to="/">
            Back
          </Link>
        </div>
      </div>
    );
  }
}

export default NoteDetail;
