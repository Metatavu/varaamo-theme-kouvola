
import { createStyles } from "@material-ui/core";
import theme from "../../theme";

export default createStyles({

  container: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
  },

  buttonGroup: { },

  reservationSwitch: {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main
  },

  selected: {
    backgroundColor: theme.palette.primary.contrastText
  },

  reservationContainer: { },

  datePickerContainer: { },

  dateListContainer: { },

  reservedTimesContainer: { },

  cancelButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },

  reserveButton: {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.common.white
  },

  disabled: {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.action.disabled
  }

});