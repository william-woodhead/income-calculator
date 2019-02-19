import React, { Component } from "react";
import ReactDOM from "react-dom";
import { WithStyles, withStyles, WithTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Period } from "../IncomeForm";
import styles from "./styles";

interface State {
  value: string;
  period: Period;
  labelWidth: number;
}

interface Props extends WithStyles<typeof styles>, WithTheme {
  onSubmit: (arg0: { figure: number; period: string }) => void;
}

class IncomeInput extends Component<Props, State> {
  state = {
    value: "",
    period: "year",
    labelWidth: 0
  };

  InputLabelRef = null;

  componentDidMount() {
    if (!this.InputLabelRef) return;
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  handleClick() {
    const parsed = parseInt(this.state.value, 10);
    this.props.onSubmit({ figure: parsed, period: this.state.period });
  }

  handleChange(event: any) {
    const target = event.target as HTMLTextAreaElement;
    this.setState({
      value: (target && target.value) || ""
    });
  }

  handlePeriodChange(event: any) {
    const target = event.target as HTMLTextAreaElement;
    this.setState({ period: target.value });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.inputs}>
          <TextField
            id="outlined-full-width"
            label="Income"
            placeholder="eg. 25000"
            helperText=""
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">£</InputAdornment>
              )
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
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={(ref: any) => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-age-simple"
            >
              Period
            </InputLabel>
            <Select
              value={this.state.period}
              onChange={this.handlePeriodChange.bind(this)}
              input={
                <OutlinedInput
                  labelWidth={this.state.labelWidth}
                  name="Period"
                  id="outlined-age-simple"
                />
              }
            >
              <MenuItem value={"year"}>Yearly</MenuItem>
              <MenuItem value={"Month"}>Monthly</MenuItem>
              <MenuItem value={"week"}>Weekly</MenuItem>
              <MenuItem value={"day"}>Daily</MenuItem>
              <MenuItem value={"hour"}>Hourly</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick.bind(this)}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(IncomeInput);
