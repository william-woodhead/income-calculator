import { createStyles, Theme } from "@material-ui/core/styles";
export default ({  }: Theme) =>
  createStyles({
    root: {},
    RowBold: {
      "& $RowName": {
        fontWeight: "bold"
      },
      "& $RowValue": {
        fontWeight: "bold"
      }
    },
    RowName: {},
    RowValue: {}
  });
