import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import "./dummy-store";
import Header from "./Header/Header";
export default class App extends React.Component {
  state = {
    folders: [],
    notes: [],
  };
  render() {
    return (
      <main className="App">
        <Header />
        <BrowserRouter>
          <Route exact path="/" component={Main} />
          <Route path="/folder/:folderId" component={Main} />
          <Route path="/note/:noteId" component={NoteDetail} />
          <Route path="/add-folder" component={AddFolder} />
          <Route path="/add-note" component={AddNote} />
        </BrowserRouter>
      </main>
    );
  }
}
