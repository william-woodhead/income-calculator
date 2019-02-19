import React, { Component } from "react";
import { WithStyles, withStyles, WithTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import styles from "./styles";

interface State {
  value: string;
}

interface Props extends WithStyles<typeof styles>, WithTheme {
  onSubmit: (arg0: { figure: number }) => void;
}

class IncomeInput extends Component<Props, State> {
  state = {
    value: ""
  };

  handleClick() {
    const parsed = parseInt(this.state.value, 10);
    this.props.onSubmit({ figure: parsed });
  }

  handleChange(event: any) {
    const target = event.target as HTMLTextAreaElement;
    this.setState({
      value: (target && target.value) || ""
    });
  }

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
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClick.bind(this)}
        >
          Submit
        </Button>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(IncomeInput);
