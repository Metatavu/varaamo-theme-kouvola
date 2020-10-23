import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export default createStyles({

  container: {
    backgroundColor: theme.palette.background.default,
  },

  heading: {
    color: theme.palette.primary.contrastText
  },

  purposes: { },

  swapIcon: {
    color: theme.palette.text.secondary
  },

});