import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import ApiContext from "../ApiContext";
import config from "../config";
import "./Note.css";
import PropTypes from "prop-types";

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
      })
      .then(() => {
        this.context.deleteNote(noteId);
        this.props.onDeleteNote(noteId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const { title, id, date_modified } = this.props;
    return (
      <div className="Note">
        <h2 className="Note__title">
          <Link to={`/note/${id}`}>{title}</Link>
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
            Modified: <Moment>{date_modified}</Moment>
          </div>
        </div>
      </div>
    );
  }
}

Note.propTypes = {
  modified: PropTypes.string,
  name: PropTypes.string,
};

Note.propTypes = {
  modified: PropTypes.string,
  name: PropTypes.string,
};
