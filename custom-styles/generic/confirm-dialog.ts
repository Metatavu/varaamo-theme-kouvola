import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export default createStyles({

  termsOfUseLink: {
    color: theme.palette.primary.contrastText
  },

  cancelButton: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main
  },

  confirmButton: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.contrastText
  },

});