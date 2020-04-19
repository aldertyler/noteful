import React from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "../Button/Button";
import { countNotesForFolder } from "../notes-helpers";
import "./NoteListNav.css";

export default function NoteListNav(props) {
  return (
    <div className="NoteListNav">
      <ul className="NoteListNav__list">
        {props.folders.map((folder) => (
          <li key={folder.id}>
            <NavLink
              className="NoteListNav__folder-link"
              to={`/folder/${folder.id}`}
            >
              <span className="NoteListNav__num-notes">
                {countNotesForFolder(props.notes, folder.id)}
              </span>
              {folder.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="NoteListNav__button-wrapper">
        <Button
          tag={Link}
          to="/add-folder"
          type="button"
          className="NoteListNav__add-folder-button"
        >
          Add Folder
        </Button>
      </div>
    </div>
  );
}

NoteListNav.defaultProps = {
  folders: [],
};
