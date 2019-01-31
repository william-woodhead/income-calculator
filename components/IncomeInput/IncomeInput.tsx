import React, { Component } from "react";
import { WithStyles, withStyles, WithTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import styles from "./styles";

interface Props extends WithStyles<typeof styles>, WithTheme {}

class IncomeInput extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TextField
          id="outlined-full-width"
          label="Yearly income"
          placeholder="eg. 25,000"
          helperText="Full width!"
          InputProps={{
            startAdornment: <InputAdornment position="start">£</InputAdornment>
          }}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(IncomeInput);
