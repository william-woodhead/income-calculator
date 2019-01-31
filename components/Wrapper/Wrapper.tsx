import React, { Fragment, Component } from "react";
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";

const styles = ({  }: Theme) => createStyles({});

interface Props extends WithStyles<typeof styles> {
  children: any;
}

class Wrapper extends Component<Props> {
  render() {
    const { children } = this.props;

    return <Fragment>{children}</Fragment>;
  }
}

export default withStyles(styles)(Wrapper);
