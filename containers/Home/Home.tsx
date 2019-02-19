import React from "react";
import { WithStyles, withStyles, WithTheme } from "@material-ui/core/styles";
import { NextContext } from "next";
import IncomeForm from "../../components/IncomeForm";
import styles from "./styles";

interface Props extends WithStyles<typeof styles>, WithTheme {}

class Home extends React.Component<Props, any> {
  static async getInitialProps({  }: NextContext) {
    return {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.form}>
          <IncomeForm />
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Home);
