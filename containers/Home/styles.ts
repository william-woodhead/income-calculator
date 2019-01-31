import { createStyles, Theme } from "@material-ui/core/styles";
export default ({ palette }: Theme) =>
  createStyles({
    root: {
      background: palette.primary.main
    }
  });
