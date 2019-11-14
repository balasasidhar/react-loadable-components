import React, { Component } from "react";
import loadable from "@loadable/component";

const HomeComponent = loadable(() => import("./views/Home"), {
  fallback: <div>Loading...</div>
});

export default class App extends Component {
  render() {
    return (
      <>
        <h1>Hello World!!</h1>
        <HomeComponent />
      </>
    );
  }
}
