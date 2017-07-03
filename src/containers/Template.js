import React, {Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

class Template extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <div>
          <header>
            <h1>Tic Tac Toe</h1>
            <RaisedButton
              label={"test"}
              primary = {true}
              onTouchTap={() => {console.log("check")}} />
          </header>
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Template;
