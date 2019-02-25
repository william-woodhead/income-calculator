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
  startYear: string;
  periodLabelWidth: number;
  yearLabelWidth: number;
}

export interface Submission {
  figure: number;
  period: Period;
  startYear: string;
}

interface Props extends WithStyles<typeof styles>, WithTheme {
  onSubmit: (arg0: Submission) => void;
}

class IncomeInput extends Component<Props, State> {
  state = {
    value: "",
    period: "year" as Period,
    startYear: "2018",
    periodLabelWidth: 0,
    yearLabelWidth: 0
  };

  periodInputLabelRef = null;
  yearInputLabelRef = null;

  componentDidMount() {
    if (this.periodInputLabelRef) {
      this.setState({
        periodLabelWidth: ReactDOM.findDOMNode(this.periodInputLabelRef)
          .offsetWidth
      });
    }
    if (this.yearInputLabelRef) {
      this.setState({
        yearLabelWidth: ReactDOM.findDOMNode(this.yearInputLabelRef).offsetWidth
      });
    }
  }

  handleClick() {
    const parsed = parseInt(this.state.value, 10);
    this.props.onSubmit({
      figure: parsed,
      period: this.state.period,
      startYear: this.state.startYear
    });
  }

  handleChange(event: any) {
    const target = event.target as HTMLTextAreaElement;
    this.setState({
      value: (target && target.value) || ""
    });
  }

  handlePeriodChange(event: any) {
    const target = event.target as HTMLTextAreaElement;
    this.setState({ period: target.value as Period });
  }

  handleStartYearChange(event: any) {
    const target = event.target as HTMLTextAreaElement;
    this.setState({ startYear: target.value });
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
                this.periodInputLabelRef = ref;
              }}
              htmlFor="outlined-period"
            >
              Period
            </InputLabel>
            <Select
              value={this.state.period}
              onChange={this.handlePeriodChange.bind(this)}
              input={
                <OutlinedInput
                  labelWidth={this.state.periodLabelWidth}
                  name="Period"
                  id="outlined-period"
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
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={(ref: any) => {
                this.yearInputLabelRef = ref;
              }}
              htmlFor="outlined-start-year"
            >
              Tax Year
            </InputLabel>
            <Select
              value={this.state.startYear}
              onChange={this.handleStartYearChange.bind(this)}
              input={
                <OutlinedInput
                  labelWidth={this.state.yearLabelWidth}
                  name="Tax year"
                  id="outlined-start-year"
                />
              }
            >
              <MenuItem value={"2018"}>2018/19</MenuItem>
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
