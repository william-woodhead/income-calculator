import React, { Component } from "react";
import { WithStyles, withStyles, WithTheme } from "@material-ui/core/styles";
import classnames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import calculate from "../../engine/calculate";
import { Period } from "../IncomeForm";
import styles from "./styles";

function getSubset(data, period) {
  switch (period) {
    case "year":
      return data.yearly;
    case "month":
      return data.monthly;
    case "week":
      return data.weekly;
    case "day":
      return data.daily;
    case "hour":
      return data.hourly;
    default:
      throw new Error("bad period");
  }
}

function genRows(data, period) {
  const subset = getSubset(data, period);
  return [
    {
      name: "Gross",
      value: subset.gross
    },
    {
      name: "Taxable",
      value: subset.taxable
    },
    {
      name: "Tax",
      value: subset.tax
    },
    {
      name: "NI",
      value: subset.ni
    },
    {
      name: "Student loan",
      value: subset.studentLoan
    },
    {
      name: "Take Home",
      value: subset.takeHome,
      bold: true
    }
  ];
}

interface Props extends WithStyles<typeof styles>, WithTheme {
  figure: number;
  period: Period;
  startYear: string;
}

interface State {
  tab: number;
}

class Result extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tab: 0
    };
  }

  handleChange(event: any, value: any) {
    this.setState({ tab: value as number });
  }

  renderTable(period: Period) {
    const { figure, startYear, classes } = this.props;
    if (!figure) return null;
    const calculated = calculate(figure, { taxYear: startYear });
    const rows = genRows(calculated, period);

    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.name}
                className={classnames({
                  [classes.RowBold]: row.bold
                })}
              >
                <TableCell component="th" scope="row">
                  <Typography className={classes.RowName}>
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography className={classes.RowValue}>
                    {row.value}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }

  render() {
    const { figure } = this.props;
    if (!figure) return null;
    const { classes } = this.props;
    const { tab } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={tab}
            onChange={this.handleChange.bind(this)}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Yearly" />
            <Tab label="Monthly" />
            <Tab label="Weekly" />
            <Tab label="Daily" />
            <Tab label="Hourly" />
          </Tabs>
        </AppBar>
        {tab === 0 && this.renderTable("year")}
        {tab === 1 && this.renderTable("month")}
        {tab === 2 && this.renderTable("week")}
        {tab === 3 && this.renderTable("day")}
        {tab === 4 && this.renderTable("hour")}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Result);
