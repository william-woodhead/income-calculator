import { createStyles, Theme } from "@material-ui/core/styles";
export default ({ spacing, palette }: Theme) =>
  createStyles({
    root: {
      maxWidth: 400,
      flexGrow: 1
    },
    header: {
      display: "flex",
      alignItems: "center",
      height: 50,
      paddingLeft: spacing.unit * 4,
      backgroundColor: palette.background.default
    },
    img: {
      height: 255,
      display: "block",
      maxWidth: 400,
      overflow: "hidden",
      width: "100%"
    },
    mobileStepper: {}
  });
