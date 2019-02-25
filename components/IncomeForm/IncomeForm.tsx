import React, { Component, Fragment } from "react";
import { WithStyles, withStyles, WithTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import IncomeInput, { Submission } from "../IncomeInput";
import Result from "../Result";
import styles from "./styles";

type StepType = "income-input" | "result";
export type Period = "year" | "month" | "week" | "day" | "hour";
type Step = {
  type: StepType;
  title: string;
  subtitle: string;
};

const steps: Array<Step> = [
  {
    type: "income-input",
    title: "Tax Calculator",
    subtitle: "Enter your income"
  },
  {
    type: "result",
    title: "Results",
    subtitle: "Estimated tax calculations"
  }
];

interface Props extends WithStyles<typeof styles>, WithTheme {}

interface State {
  activeStep: number;
  figure: number;
  period: Period;
  startYear: string;
}

class IncomeForm extends Component<Props, State> {
  state: State = {
    activeStep: 0,
    figure: 0,
    period: "year",
    startYear: "2018"
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = (activeStep: number) => {
    this.setState({ activeStep });
  };

  handleInputSubmit({ figure, period, startYear }: Submission) {
    this.setState({
      figure,
      period,
      startYear
    });
    this.handleNext();
  }

  renderStep(step: Step) {
    switch (step.type) {
      case "income-input":
        return <IncomeInput onSubmit={this.handleInputSubmit.bind(this)} />;
      case "result":
        return (
          <Result
            figure={this.state.figure}
            period={this.state.period}
            startYear={this.state.startYear}
          />
        );
      default:
        return null;
    }
  }

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = steps.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography component="h2" variant="h2" gutterBottom>
            {steps[activeStep].title}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {steps[activeStep].subtitle}
          </Typography>
        </Paper>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          className={classes.swipeable}
          enableMouseEvents
        >
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              {Math.abs(activeStep - index) <= 2 ? this.renderStep(step) : null}
            </Fragment>
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          variant="progress"
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(IncomeForm);
