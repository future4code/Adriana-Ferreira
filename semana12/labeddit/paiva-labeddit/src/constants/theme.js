import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, secondaryColor, neutralColor } from './colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: secondaryColor,
        },
        secondary: {
            main: secondaryColor,
            contrastText: neutralColor,
        },
        text: {
            primary: neutralColor,
        }
    },
});

export default theme;