import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import ApiContext from "../ApiContext";
import config from "../config";
import "./Note.css";

export default class Note extends React.Component {
  static defaultProps = {
    onDeleteNote: () => {},
  };
  static contextType = ApiContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    const noteId = this.props.id;

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then(() => {
        this.context.deleteNote(noteId);
        // allow parent to perform extra behaviour
        this.props.onDeleteNote(noteId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const { name, id, modified } = this.props;
    return (
      <div className="Note">
        <h2 className="Note__title">
          <Link to={`/note/${id}`}>{name}</Link>
        </h2>
        <button
          className="Note__delete"
          type="button"
          onClick={this.handleClickDelete}
        >
          Delete{" "}
        </button>
        <div className="Note__dates">
          <div className="Note__dates-modified">
            Modified: <Moment date={`${modified}`} />
          </div>
        </div>
      </div>
    );
  }
}
