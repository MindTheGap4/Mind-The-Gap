import {createMuiTheme} from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#62efff',
      main: '#00bcd4',
      dark: '#008ba3',
      contrastText: '#000000'
    },
    secondary: {
      light: '#ff79b0',
      main: '#ff4081',
      dark: '#c60055',
      contrastText: '#000000'
    }
  }
})

export default theme
