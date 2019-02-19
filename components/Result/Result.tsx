import React, { Component } from "react";
import { WithStyles, withStyles, WithTheme } from "@material-ui/core/styles";
import calculate from "../../engine/calculate";
import styles from "./styles";

interface Props extends WithStyles<typeof styles>, WithTheme {
  figure: number;
}

class Result extends Component<Props> {
  render() {
    const { figure } = this.props;
    console.log("figure", figure);
    if (!figure) return null;
    const calculated = calculate(figure, {});
    console.log("calculated", calculated);
    const { classes } = this.props;
    return (
      <div className={classes.root}>Take home {calculated.yearly.takeHome}</div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Result);
