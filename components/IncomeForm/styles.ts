import { createStyles, Theme } from "@material-ui/core/styles";
export default ({ spacing, palette }: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 500,
      flexGrow: 1,
      minHeight: "100vh"
    },
    header: {
      marginTop: spacing.unit * 4,
      backgroundColor: palette.background.default
    },
    mobileStepper: {},
    swipeable: {
      marginBottom: spacing.unit * 4
    }
  });
