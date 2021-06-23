import React, { Component } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
// import { orange } from "@material-ui/core/colors";
import Page1 from "./components/Page1";

export default class App extends Component {
  //     theme = createMuiTheme({
  //         palette:{
  //             primary : orange
  //         }
  //     }
  //   );
  render() {
    return (
      <ThemeProvider theme={createMuiTheme()}>
        <Page1 />
      </ThemeProvider>
    );
  }
}
