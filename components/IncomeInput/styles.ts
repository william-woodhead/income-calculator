import { createStyles, Theme } from "@material-ui/core/styles";
export default ({ spacing }: Theme) =>
  createStyles({
    root: {},
    inputs: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between"
    },
    buttons: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end"
    },
    formControl: {
      minWidth: 120,
      marginTop: spacing.unit * 2,
      marginLeft: spacing.unit
    }
  });
