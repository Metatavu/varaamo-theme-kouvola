import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export default createStyles({

  root: { },

  formRow: { },

  formColumn: { },

  formDivider: { },

  formSubmit: { },

  searchButton: {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.contrastText
  },

  clearButton: {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main
  }

});