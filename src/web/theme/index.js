import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import themeColors from './themeColor';

const theme = responsiveFontSizes(createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        justifyContent: 'center',
        height: 64,
        zIndex: 10001,
      },
      colorPrimary: {
        backgroundColor: themeColors.AppBar.bgColor,
      },
    }
  },
}))

export default theme;
