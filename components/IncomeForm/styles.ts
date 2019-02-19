import { createStyles, Theme } from "@material-ui/core/styles";
export default ({ spacing, palette }: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 400,
      flexGrow: 1,
      minHeight: "100vh"
    },
    header: {
      display: "flex",
      alignItems: "center",
      height: 50,
      paddingLeft: spacing.unit * 4,
      backgroundColor: palette.background.default
    },
    mobileStepper: {}
  });
